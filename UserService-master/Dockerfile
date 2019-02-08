# setting the base image required to run your app
FROM java:8

# setting the work directory in docker container
WORKDIR usr/user

# copy / add contents from current dir to container
ADD ./target/UserService-master-1.0.jar /usr/user.jar

# printing what all are there inside /usr
RUN ls /usr

# Make port 8080 available to others
EXPOSE 9098

RUN bash -c 'touch /usr/app.jar'

ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongo-container/UserProfileCopy","-jar","/usr/user.jar"]
