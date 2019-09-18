echo "What chages were made?"
read changes
git add .
git commit -a -m "${changes}"
git push origin master