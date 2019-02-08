# setting the base image required to run your app
FROM java:8

# setting the work directory in docker container
WORKDIR usr/app

# copy / add contents from current dir to container
ADD ./target/questionGenerator-1.0.jar /usr/app.jar

# printing what all are there inside /usr
RUN ls /usr

# Make port 8080 available to others
EXPOSE 9090

RUN bash -c 'touch /usr/app.jar'

ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://localhost/questiondb","-jar","/usr/app.jar"]
