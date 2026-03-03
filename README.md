# HablaHolandesEN

Transform Spanish words to sound more Dutch by adding "EN"! 🇳🇱

## Description

This project implements three different ways to transform Spanish words to make them sound more "Dutch" by adding "EN" to them:

1. **Quitar la última vocal y añadir EN** (Remove the last vowel and add EN)
   - Example: "casa" → "casen"
   
2. **Siempre añadir EN sin tocar nada** (Always add EN without changing anything)
   - Example: "casa" → "casaen"
   
3. **Añadir EN y doblar consonante** (Add EN and double the final consonant - even more Dutch! 😏)
   - Example: "sol" → "sollen"

## Usage

```python
from habla_holandes import (
    quitar_vocal_y_anadir_en,
    siempre_anadir_en,
    anadir_en_y_doblar_consonante
)

# Example transformations
palabra = "casa"

print(quitar_vocal_y_anadir_en(palabra))      # Output: casen
print(siempre_anadir_en(palabra))             # Output: casaen
print(anadir_en_y_doblar_consonante(palabra)) # Output: casaen

palabra = "sol"
print(anadir_en_y_doblar_consonante(palabra)) # Output: sollen
```

## Running the Examples

```bash
python3 habla_holandes.py
```

## Running Tests

```bash
python3 -m unittest test_habla_holandes.py -v
```

## Functions

### `quitar_vocal_y_anadir_en(palabra)`
Removes the last vowel in the word and adds "EN" at the end.

### `siempre_anadir_en(palabra)`
Simply adds "EN" to the end of the word without any modifications.

### `anadir_en_y_doblar_consonante(palabra)`
If the word ends with a consonant, doubles it and adds "EN". If it ends with a vowel, just adds "EN".
