# =====================================================================
# AI Workflow Agent - Full Stack Application
# Stack: Java 21 + Spring Boot 3.2 + React 18 + TypeScript
# =====================================================================

# PROJECT OVERVIEW
# ----------------
# This is the complete codebase for an AI Workflow Automation Platform.
# It allows users to create automated workflows with AI-powered
# triggers, conditions, and actions (e.g., "When email arrives, summarize and save to database").

# ARCHITECTURE
# ------------
# Backend (Java 21 + Spring Boot 3.2):
#   - REST API with JWT authentication
#   - PostgreSQL database (JPA/Hibernate)
#   - OpenAI integration (Spring AI, GPT-4o-mini)
#   - Workflow engine with triggers/actions
#   - Webhook system for external integrations
#
# Frontend (React 18 + TypeScript):
#   - Modern UI with React Router
#   - Axios for API communication
#   - Component-based architecture
#   - Responsive design with Tailwind CSS

# TECH STACK
# ----------
# Backend:
#   - Java 21 (JDK)
#   - Spring Boot 3.2.5
#   - Spring Data JPA (PostgreSQL)
#   - Spring Data MongoDB (for vector/knowledge base)
#   - Spring Data Redis (cache)
#   - Spring AI (OpenAI integration)
#   - Spring Security (JWT, OAuth2)
#   - Lombok (boilerplate reduction)
#   - MapStruct (object mapping)
#   - jjwt (JSON Web Tokens)
#
# Frontend:
#   - React 18
#   - React DOM
#   - React Router DOM
#   - Axios (HTTP client)
#   - React Icons
#   - Recharts (data visualization)
#   - Lucide React (icons)
#
# HOW IT WORKS
# ------------
# 1. User registers/login -> JWT token issued
# 2. User creates a Workflow:
#    - Sets name, description
#    - Defines triggers (webhook, schedule, manual)
#    - Defines conditions (if input.value matches)
#    - Defines actions (ai, send, save)
# 3. User saves the workflow
# 4. User triggers the workflow (runs it):
#    - Workflow executes triggers in order
#    - Conditions are evaluated
#    - Actions are executed (including AI processing)
#    - Result is saved and returned
# 5. User can view executions & manage webhooks

# SETUP INSTRUCTIONS
# ------------------
# Prerequisites:
#   - Java 21 JDK (Eclipse Temurin)
#   - Maven 3.9+
#   - Node.js 18+ with npm
#   - PostgreSQL 15+
#   - Redis 7+
#   - MongoDB 7+
#
# Backend Setup:
#   1. cd backend
#   2. mvn clean install
#   3. Set environment variables:
#      - OPENAI_API_KEY
#      - JWT_SECRET
#      - DATABASE_URL
#   4. mvn spring-boot:run
#
# Frontend Setup:
#   1. cd frontend
#   2. npm install
#   3. npm start
#   4. Open http://localhost:3000
#
# DEPLOYMENT
# ----------
# Docker containers for both backend and frontend
# Ready for AWS, GCP, or Azure deployment

build: ## Build the entire project
	@echo "Building AI Workflow Agent..."
	@cd backend && mvn clean package -DskipTests
	@cd ../frontend && npm install && npm run build
	@echo "Build complete!"

run: ## Run the application
	@cd backend && mvn spring-boot:run &
	@cd ../frontend && npm start

test: ## Run tests
	@cd backend && mvn test

# =====================================================================
