# setting the base image required to run your app
FROM java:8

# setting the work directory in docker container
WORKDIR usr/game_reporting

# copy / add contents from current dir to container
ADD ./target/GameReporting-1.0.jar /usr/game_reporting.jar

# printing what all are there inside /usr
RUN ls /usr

# Make port 8080 available to others
EXPOSE 9099

RUN bash -c 'touch /usr/reporting.jar'
ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://localhost:27017/Game_Reports","-jar","/usr/game_reporting.jar"]
