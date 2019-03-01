# ACS Code Challenge

## Instructions

With a server running Apache and PHP, either clone this repository or upload  `/asc-app/` into a directory on the server. And add a virtual host to either apache's `httpd.conf` or `httpd-vhosts.conf` configuration file as follows, using the port you desire if not 80, and for DocumentRoot, point to the ``"acs-app/public"`` directory please.

```apacheconf
<VirtualHost *:80>
    DocumentRoot "PATH/TO/acs-app/public"
    ServerName localhost
</VirtualHost>
```
Then simply open a browser to http://localhost:80 or whichever port and server name you specified.
