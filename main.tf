terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"

}


resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.app_server.id
  allocation_id = "eipalloc-024ffbc445ee2e273"
}



resource "aws_instance" "app_server" {
  ami                         = "ami-0ff8a91507f77f867"
  instance_type               = "t2.micro"
  security_groups             = [aws_security_group.Haustierfash.name]
  associate_public_ip_address = true


  # https://github.com/hashicorp/terraform-provider-aws/issues/23315
  user_data_replace_on_change = true

  tags = {
    Name = "Haustierfash-AWS"
  }

  user_data = <<-EOF
#!/bin/bash
set -ex
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo docker network create --driver=bridge haustierfash-network
sudo docker run --name backend -d --network haustierfash-network bakkym/haustierfash-web-backend:2.1.0 
sudo docker run --name frontend -d --network haustierfash-network bakkym/haustierfash-web-frontend:2.1.0 
sudo docker run --name nginx -p 80:80  -d --network haustierfash-network bakkym/haustierfash-web-nginx:2.1.0 

  EOF

}
resource "aws_security_group" "Haustierfash" {
  name   = "Haustierfash group"
  vpc_id = "vpc-0f0968a8046bc0995"

  ingress {
    description      = "SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
    self             = false
  }

  ingress {
    description      = "app"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }



  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "Haustierfash"
  }


}

output "instance_ip" {
  description = "The public ip for ssh access"
  value       = aws_instance.app_server.public_ip
}

