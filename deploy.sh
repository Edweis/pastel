set -ex

PROJECT=citrouille
USER=lipp
SERVER=lipp.local 

cp nginx.conf build/
rsync -r build/*   $USER@$SERVER:/home/$USER/projects/pastel
ssh $USER@$SERVER "sudo nginx -t && sudo nginx -s reload"


# curl -L pastel.kapochamo.com | head 
# Create a symlink on the server: 
#  sudo ln -fs /home/lipp/projects/pastel/nginx.conf /etc/nginx/conf.d/pastel.kapochamo.com.conf
# Restart NGINX
#   sudo nginx -t && sudo nginx -s reload
