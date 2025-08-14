#include <stdio.h>
#include <ctype.h>

void toUpperCase(char *str) {
    while (*str != '\0') {
        *str = toupper(*str);
        str++;
    }
}