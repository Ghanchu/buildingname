provider "aws" {
    region = "us-west-2"
    access-key = "AKIAT6SYX2AZZRJG6TZJ"
    secret-key = "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"

}

resource "aws_vpc" "main" {
    cidr_block: "10.0.0.0/16"
    tags = {
        Name = "main_vpc"
    }
}

resource "aws_instance" "nodeserver" {
    
}