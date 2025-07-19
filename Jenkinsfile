pipeline {
  agent any

  tools {
    nodejs 'Node 18'
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/JuanDiegoDev1/CI-CD.git', branch: 'main'
      }
    }

    stage('Instalar dependencias') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Ejecutar pruebas Cypress') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
    }
  }
}
