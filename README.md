# Ben Waddell's Personal Website

My name is Ben Waddell and welcome to the benwaddell.com repository.

![alt text](https://benwaddell.s3.amazonaws.com/github/website/preview.png)


## AWS Resources

The following AWS resource are utilized:

- S3 (storage for hosting website files)
- CloudFront (for HTTPS and content delivery)
- ACM (for the SSL certificate)
- Route53 (for website DNS resolution)
- Lambda (API function for the contact form)
- SES (for sending contact form emails)
- IAM (for managing resource access)
- CloudFormation (for deploying the stack as IaC)

 ![alt text](https://benwaddell.s3.amazonaws.com/github/website/stackdetails.png)


## How It Works

The website is built using HTML, CSS, and JS and hosted entirely on AWS.

The website files are stored in S3, with CloudFront handling content delivery, caching, and HTTPS.

A SSL/TLS certificate for secure HTTPS is created and stored in ACM.

Route53 DNS A and AAAA records are added to forward lookups for `(www.)benwaddell.com` to CloudFront, where it is then served as `https://(www.)benwaddell.com`.

A Lambda function handles the API for the website's contact form and sends contact emails using SES.

The entire deployment is automated and stored as a CloudFormation template. The only pre-requisite work is the registration of a domain and DNS zone, as well as SES validation of any email addresses used to send/receive emails. Website details are prompted during stack creation and this CloudFormation template is re-usable for any website.

Finally, GitHub Actions are used for CI/CD to automate deploying changes to S3 and updating the CF stack.

Using AWS I am able to host a fast, highly available website, with secure SSL, DNS, email functionality, serverless compute / API, with cached content delivery, all for nearly no cost whatsoever.