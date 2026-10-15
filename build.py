#!/usr/bin/env python
# =====================================================================
# AI Workflow Agent - Build Script
# Stack: Java 21 + Spring Boot 3.2 + React 18 + TypeScript
# =====================================================================

import os
import subprocess
import sys

# === PATHS ===
JDK = '/c/Users/jofer/AppData/Local/hermes/tools/eclipse-jdk21/jdk-21.0.12.1+1'
JDK_BIN = os.path.join(JDK, 'bin')
MAVEN_BIN = '/c/Users/jofer/AppData/Local/hermes/tools/apache-maven-3.9.9/apache-maven-3.9.9/bin'
PROJECT = '/c/Users/jofer/AppData/Local/hermes/cache/ai-workflow-agent/backend'
FRONTEND = '/c/Users/jofer/AppData/Local/hermes/cache/ai-workflow-agent/frontend'

def run_cmd(cmd, cwd=None, env=None, check=True):
    """Run a command and return result."""
    print(f"\n{'='*60}")
    print(f"Running: {' '.join(cmd)}")
    print(f"Directory: {cwd or os.getcwd()}")
    print(f"{'='*60}")
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, env=env)
    if result.stdout:
        lines = result.stdout.strip().split('\n')
        for line in lines[:30]:
            print(line)
        if len(lines) > 30:
            print(f"... ({len(lines) - 30} more lines)")
    if result.stderr:
        lines = result.stderr.strip().split('\n')
        for line in lines[:10]:
            print(f"STDERR: {line}")
    print(f"\nReturn code: {result.returncode}")
    if check and result.returncode != 0:
        print("BUILD FAILED!")
        sys.exit(result.returncode)
    return result

def setup_environment():
    """Set up environment variables for Java and Maven."""
    env = os.environ.copy()
    env['JAVA_HOME'] = JDK
    env['JRE_HOME'] = JDK
    env['PATH'] = MAVEN_BIN + ';' + JDK_BIN + ';' + env.get('PATH', '')
    return env

def main():
    print("=" * 60)
    print("AI WORKFLOW AGENT - FULL PROJECT BUILD")
    print("=" * 60)

    # === ENVIRONMENT CHECK ===
    print("\n[1/5] Checking environment...")
    env = setup_environment()
    result = subprocess.run(['mvn', '--version'], capture_output=True, text=True, env=env)
    print("Maven:", result.stdout.split('\n')[0])
    print("Java:", result.stderr.split('\n')[0])

    # === BACKEND BUILD ===
    print("\n[2/5] Building Backend (Java/Spring Boot)...")
    run_cmd([maven, 'clean', 'package', '-DskipTests'], cwd=PROJECT, env=env)

    # === FRONTEND BUILD ===
    print("\n[3/5] Building Frontend (React)...")
    if not os.path.exists(FRONTEND):
        print("Frontend directory not found, skipping")
    else:
        run_cmd(['npm', 'install'], cwd=FRONTEND)
        run_cmd(['npm', 'run', 'build'], cwd=FRONTEND)

    print("\n" + "=" * 60)
    print("BUILD COMPLETE!")
    print("=" * 60)
    print("\nDeliverables:")
    print("  Backend: target/ai-workflow-agent-1.0.0.jar")
    print("  Frontend: frontend/build/")
    print("\nTo run:")
    print("  Backend: java -jar target/ai-workflow-agent-1.0.0.jar")
    print("  Frontend: npm start")

if __name__ == '__main__':
    main()
