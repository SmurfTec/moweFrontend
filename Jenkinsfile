pipeline {
    agent { label 'FirstNode' }
    stages {
        stage("Copy Code") {

            steps {
                dir('/home/zain/nextjs_projects/moweFrontend') {
                    sh "sudo cp -r /${WORKSPACE}/** ./"
                }
            }
        }
        stage("Pm2 Process") {
            steps {
                dir('/home/zain/nextjs_projects/moweFrontend') {
                    sh "sudo npm install --legacy-peer-deps"
                    sh "sudo npm run build"
                    sh "pm2 restart moweFrontend"
                }
            }
        }
    }
}
