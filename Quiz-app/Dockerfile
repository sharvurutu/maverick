# setting the base image required to run your app
FROM java:8

# setting the work directory in docker container
# WORKDIR usr/eureka

# copy / add contents from current dir to container
ADD ./target/Quiz-app-1.0.jar /usr/eureka.jar

# printing what all are there inside /usr
RUN ls /usr

# Make port 9090 available to others
EXPOSE 8082

RUN bash -c 'touch /usr/eureka.jar'

ENTRYPOINT ["java","-jar","/usr/eureka.jar"]
