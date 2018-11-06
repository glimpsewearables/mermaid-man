pipeline {
    docker.withRegistry('https://471137844663.dkr.ecr.us-west-2.amazonaws.com/docker-images') {
        def reactImage = docker.build("react-image:react_latest")

        /* push container to AWS ECR */
        reactImage.push()
    }
}
