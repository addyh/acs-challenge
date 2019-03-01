# ACS Code Challenge

## Instructions

With a server running Apache and PHP, either clone this repository or upload  `/asc-app/` into a directory on the server. And add a virtual host to apache's httpd.conf or httpd-vhosts.conf as follows, using the port you desire if not 80, and for DocumentRoot, point to the ``"acs-app/public"`` directory please.

```apacheconf
<VirtualHost *:80>
    DocumentRoot "C:/xampp/htdocs/acs-app/public"
    ServerName localhost
</VirtualHost>
```
