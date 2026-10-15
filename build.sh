#!/bin/bash
# =====================================================================
# AI Workflow Agent - Full Project Build Script
# Stack: Java 21 + Spring Boot 3.2 + React 18 + TypeScript
# =====================================================================

echo "=========================================="
echo "AI WORKFLOW AGENT - FULL PROJECT BUILD"
echo "=========================================="

# === PATHS ===
JDK="/c/Users/jofer/AppData/Local/hermes/tools/eclipse-jdk21/jdk-21.0.12.1+1"
JDK_BIN="$JDK/bin"
MAVEN_BIN="/c/Users/jofer/AppData/Local/hermes/tools/apache-maven-3.9.9/apache-maven-3.9.9/bin"
PROJECT="/c/Users/jofer/AppData/Local/hermes/cache/ai-workflow-agent/backend"
FRONTEND="/c/Users/jofer/AppData/Local/hermes/cache/ai-workflow-agent/frontend"

# === ENVIRONMENT CHECK ===
echo ""
echo "[1/5] Checking environment..."
export JAVA_HOME="$JDK"
export JRE_HOME="$JDK"
export PATH="$MAVEN_BIN:$JDK_BIN:$PATH"
echo "JAVA_HOME: $JAVA_HOME"
echo "PATH: $PATH"

echo ""
echo "Java: $(java -version 2>&1 | head -1)"
echo "Maven: $(mvn -version 2>&1 | head -1)"

# === BACKEND BUILD ===
echo ""
echo "[2/5] Building Backend (Java/Spring Boot)..."
cd "$PROJECT" || exit 1
mvn clean package -DskipTests 2>&1 | tail -30

BACKEND_RC=${PIPESTATUS[0]}
if [ $BACKEND_RC -ne 0 ]; then
    echo "ERROR: Backend build failed!"
    exit 1
fi

# === FRONTEND BUILD ===
echo ""
echo "[3/5] Building Frontend (React)..."
if [ -d "$FRONTEND" ]; then
    cd "$FRONTEND" || exit 1
    npm install
    npm run build
    FRONTEND_RC=$?
    if [ $FRONTEND_RC -ne 0 ]; then
        echo "WARNING: Frontend build failed with code $FRONTEND_RC"
    else
        echo "Frontend build completed successfully"
    fi
else
    echo "Frontend directory not found, skipping frontend build"
fi

# === SUMMARY ===
echo ""
echo "=========================================="
echo "BUILD COMPLETE!"
echo "=========================================="
echo ""
echo "Deliverables:"
echo "  Backend: $PROJECT/target/ai-workflow-agent-1.0.0.jar"
echo "  Frontend: $FRONTEND/build/"
echo ""
echo "To run:"
echo "  Backend: java -jar $PROJECT/target/ai-workflow-agent-1.0.0.jar"
echo "  Frontend: cd $FRONTEND && npm start"
echo ""

# Verify files exist
if [ -f "$PROJECT/target/ai-workflow-agent-1.0.0.jar" ]; then
    echo "Backend jar: EXISTS"
    ls -la "$PROJECT/target/ai-workflow-agent-1.0.0.jar"
else
    echo "Backend jar: NOT FOUND"
fi

echo ""
echo "=== BUILD SCRIPT COMPLETE ==="
