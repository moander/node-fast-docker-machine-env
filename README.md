## DEPRECATED

Use docker-machine inspect --format instead:

    eval $(docker-machine inspect dev -f "export DOCKER_HOST='tcp://{{.Driver.IPAddress}}:2376' DOCKER_CERT_PATH='{{.Driver.StorePath}}/machines/{{.Driver.MachineName}}' DOCKER_MACHINE_NAME='{{.Driver.MachineName}}' DOCKER_TLS_VERIFY=1")

or

    wget http://tinyurl.com/fast-docker-machine-env
    chmod a+x fast-docker-machine-env
    mv fast-docker-machine-env /usr/local/bin


## Usage

Place this in your .bash_profile:

    eval $(fast-docker-machine-env)

