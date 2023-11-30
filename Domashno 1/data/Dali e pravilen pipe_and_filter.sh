echo "Filtering data"

printf "[\n" > vinarii.json
grep -oP '<node.*?/node>' vinarii_osm.osm |
grep -oP '<node.*?/node>|<tag k="(name:mk|phone|craft|website|addr:street|addr:city|opening_hours)".*?/>' |
grep -zoP '<node.*?/node>' |
sed 's/<tag/\n<tag/g' |
awk -F '[<>="]+' '
BEGIN {
    print "\t{"
    inside_node = 0
}
{
    if ($2 == "node") {
        if (inside_node == 1) {
            print "\t},"
        }
        printf "\t\"%s\": \"%s\",\n", $(NF-4), $(NF-2)
        inside_node = 1
    } else if ($2 == "/node") {
        print "\t}"
        inside_node = 0
    } else {
        printf "\t\t\"%s\": \"%s\",\n", $4, $6
    }
}
END {
    print "]"
}
' >> vinarii.json

echo "Converting finished, press any key to continue"
read -n 1 -s
