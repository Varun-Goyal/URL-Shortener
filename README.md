Developed URL Shortening Service like Bitly where user can submit a long URL and in result gets back a shorter URL. The project was developed using various such Cloud Platforms as Amazon Web Services (AWS) and Heroku. Below are the project details:

1. Developed Web Application for submitting the long URL and getting back a shorter URL.
2. Performed Analytics to view user trends for the long URL
3. Created Link Shortening Server, Link Redirect Server and the Trend Server on AWS Elastic Beanstalk.
3. Code deployed on Link Shortening Server shortens the long URL and persists it in DB (MySQL) along with long URL. Also, this information will be stored in Cache (NoSQL DB i.e. Redis) for faster redirection purpose for the future requests.
4. Code deployed on Link Redirect Server redirects users to the original long URL for the requested shortened URL.
5. Trend Server retrieves statistics from DB (MongoDB) and shows it up on the Web Application.
6. Used AWS SQS to pass information across multiple entities at same time.
7. Deployed Web application on Heroku, a Cloud based platform. 

Technologies:

Front-End: HTML5, CSS3, Bootstrap, Angular.js
Back-End: Node.js
DB: MySQL, MongoDB, Redis
Cloud: AWS Elastic Beanstalk, AWS SQS, Cloud9, Heroku
