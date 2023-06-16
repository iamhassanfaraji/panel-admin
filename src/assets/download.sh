#!/bin/bash

NUMBER=(
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_1.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_2.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_3.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_4.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_5.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_6.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_7.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_8.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_9.jpg
  https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_10.jpg
)

for N in ${NUMBER[@]};do
    wget --no-proxy $N -P /home/hassanafaraji/programming/projects/panel-admin/src/assets/images/users
done 


