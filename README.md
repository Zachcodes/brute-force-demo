## How to run

1. Create the docker container `docker-compose build`

2. Run the docker container `docker-compose up`

3. Validate the name of the created container `docker-compose ps` ( should be brute-force-presentation_web_1 )

If the name is not brute-force-presentation_web_1, switch out the below instance of the name with whatever you have locally

4. Run the following command from a seperate terminal `docker exec -it brute-force-presentation_web_1 hydra -I -L /usr/app/users.txt -P /usr/app/shortpassword.txt -M targets.txt http-form-post "/api/login:username=^USER^&password=^PASS^:Failure"`
