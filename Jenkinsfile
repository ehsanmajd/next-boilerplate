pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                node() {
                  npm install
                }
            }
        }
        stage('Build') {
            steps {
                node() {
                  npm run build
                }
            }
        }

    }
}
