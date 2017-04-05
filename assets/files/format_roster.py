from sys import stdin

# Copy membership roster from Google Sheet to roster_input.txt
# Run from command line:
# python3 format_roster.py < roster_input.txt > roster.txt
# Output seperates every name with <br> and condenses to single line
for line in stdin:
  line = line.strip()
  result = line + "<br>"
  print (result, end="")
