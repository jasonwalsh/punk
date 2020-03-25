<div align="center">
  <img width="2032" src="https://user-images.githubusercontent.com/2184329/77548119-7c65b480-6e84-11ea-8582-c52bb8d9d539.png" />
  <strong>A GUI for generating Packer templates</strong>
  <p>View a live example of Punk <a href="https://murmuring-forest-55290.herokuapp.com">here</a>!</p>
</div>

## Contents

- [Motivation](#motivation)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Local](#local)
  - [Docker](#docker)
- [Limitations](#limitations)
- [Future Considerations](#future-considerations)
- [License](#license)

## Motivation

HashiCorp [Packer](https://packer.io/) is a tool for automating the creation of machine images. Packer uses [templates](https://packer.io/docs/templates/index.html) for defining one or more builds using one of two file formats, JSON and [HCL](https://github.com/hashicorp/hcl).

> I created Punk as a means to provide a GUI for creating Packer templates.

To put it quite simply, Punk provides a simple and clean user interface that allows users to focus more on the specific details of a machine image rather than the format of the Packer template.

**Note:** Punk is still in its infancy and lacks many features. However, should you discover a missing feature or bug, please create a new [issue](https://github.com/jasonwalsh/punk/issues).

## Requirements

- [Yarn](https://classic.yarnpkg.com/en/docs/install) (for local deployment)
- [Docker](https://www.docker.com/get-started) (for production deployment)

## Usage

Getting started with Punk is easy, simply follow the instructions below:

### Local

    $ yarn serve

### Docker

**Note:** Even though this is a public repository, you still need to be authenticated to download this image. For more information, please refer to the official [documentation](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-to-github-packages).

    $ docker pull docker.pkg.github.com/jasonwalsh/punk/punk:latest
    $ docker run -d -p 8080:8080 docker.pkg.github.com/jasonwalsh/punk/punk

## Limitations

Punk started as a weekend project and is very limited in functionality. Currently, Punk *only* supports the [`amazon-ebs`](https://packer.io/docs/builders/amazon-ebs.html) builder with limited configuration options.

The options currently supported for the `amazon-ebs` builder are:

- `access_key`
- `ami_name`
- `instance_type`
- `region`
- `secret_key`
- `source_ami`

While these options are limited, the result produces a valid Packer template.

## Future Considerations

As mentioned previously, Punk is still in its infancy and has the potential to grow. Below is a list of potential features that would make Punk a better product:

- Support for additional [builders](https://packer.io/docs/builders/index.html)
- Support for [provisioners](https://packer.io/docs/provisioners/index.html)
- Support for [post-processors](https://packer.io/docs/post-processors/index.html)

## License

[MIT License](LICENSE)
