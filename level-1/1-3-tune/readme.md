# 1.3. Tuning a piano

## Problem

We have build a device to tune a piano. As an input we are getting
the frequency of a key, and we want to return as output
the closest note and if it is above or below that closest note.

Pianos are tuned with "equal temperament", which means that
the gap in frequencies among two consecutive keys is always 1/12.
There is more info on formulas on piano tuning here: https://en.wikipedia.org/wiki/Piano_key_frequencies

In order to display flat and sharp notes, use the flat notation: "Gb", "Eb", ...
