while [ true ]
do

echo "indexing"
curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost/indexDB
sleep 3600

done
