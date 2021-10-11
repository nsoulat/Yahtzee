#!/usr/bin/env bash

print_title_line () {
	for i in $( seq 0 $1 )
	do
		printf "="
	done
	printf "=\n"
}

title=$1
len=${#title}

printf "\n"
print_title_line $len
printf " ${title}\n"
print_title_line $len
printf "\n"