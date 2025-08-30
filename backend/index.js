import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import cors from "cors"; 
import cookieParser from "cookie-parser"; 
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
	origin: true,
	credentials: true
}

// database connection
mongoose.set('strictQuery',false)
const connect = async()=>{
	try {
	     await mongoose.connect(process.env.MONGO_URL,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})

	console.log('MongoDB database connected');

	} catch (err) {
		console.log('MongoDB database connection failed:', err.message)
	}	
};

// Set up logging
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
	fs.mkdirSync(logsDir);
}

// Create a write stream for access logs
const accessLogStream = fs.createWriteStream(
	path.join(logsDir, 'access.log'),
	{ flags: 'a' }
);

//middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cors(corsOptions));
app.use(cookieParser());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev')); // Log to console in development
} else {
	app.use(morgan('combined', { stream: accessLogStream })); // Log to file in production
}

// Set security HTTP headers
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'"],
		scriptSrc: ["'self'", "'unsafe-inline'", "data:", "blob:"],
		connectSrc: ["'self'", "http://localhost:4000"],
		imgSrc: ["'self'", "data:", "blob:"],
		frameSrc: ["'self'"],
		fontSrc: ["'self'", "https:", "data:"],
	}
}));

// Rate limiting to prevent brute force attacks
const limiter = {
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
	message: 'Too many requests from this IP, please try again after 15 minutes'
};

// Apply rate limiting to authentication routes
if (process.env.NODE_ENV === 'production') {
	app.use('/api/v1/auth', rateLimit(limiter));
}

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!";
	
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: process.env.NODE_ENV === "development" ? err.stack : {}
	});
});

// Handle 404 routes
app.use("*", (req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found"
	});
});

app.listen(port, () => {
	connect();
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});