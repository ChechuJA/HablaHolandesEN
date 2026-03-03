"""
HablaHolandesEN - Transform Spanish words to sound more Dutch by adding EN
"""


def quitar_vocal_y_anadir_en(palabra):
    """
    Remove the last vowel and add EN.
    
    Args:
        palabra (str): The Spanish word to transform
        
    Returns:
        str: The transformed word
        
    Examples:
        >>> quitar_vocal_y_anadir_en("casa")
        'casen'
        >>> quitar_vocal_y_anadir_en("perro")
        'perren'
    """
    if not palabra:
        return "en"
    
    vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
    
    # Find the last vowel position
    last_vowel_pos = -1
    for i in range(len(palabra) - 1, -1, -1):
        if palabra[i] in vocales:
            last_vowel_pos = i
            break
    
    # If a vowel was found, remove it and add EN
    if last_vowel_pos != -1:
        return palabra[:last_vowel_pos] + palabra[last_vowel_pos + 1:] + "en"
    else:
        # If no vowel found, just add EN
        return palabra + "en"


def siempre_anadir_en(palabra):
    """
    Always add EN without touching anything.
    
    Args:
        palabra (str): The Spanish word to transform
        
    Returns:
        str: The transformed word
        
    Examples:
        >>> siempre_anadir_en("casa")
        'casaen'
        >>> siempre_anadir_en("perro")
        'perroen'
    """
    return palabra + "en"


def anadir_en_y_doblar_consonante(palabra):
    """
    Add EN and double the final consonant (even more Dutch!).
    
    Args:
        palabra (str): The Spanish word to transform
        
    Returns:
        str: The transformed word
        
    Examples:
        >>> anadir_en_y_doblar_consonante("pan")
        'pannen'
        >>> anadir_en_y_doblar_consonante("sol")
        'sollen'
    """
    if not palabra:
        return "en"
    
    vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
    
    # Check if the last character is a consonant
    if palabra[-1] not in vocales:
        # Double the final consonant and add EN
        return palabra + palabra[-1] + "en"
    else:
        # If it ends with a vowel, just add EN
        return palabra + "en"


if __name__ == "__main__":
    # Example usage
    palabras = ["casa", "perro", "sol", "pan", "gato", "libro"]
    
    print("=== HablaHolandesEN - Transformaciones ===\n")
    
    for palabra in palabras:
        print(f"Palabra original: {palabra}")
        print(f"  1. Quitar vocal + EN: {quitar_vocal_y_anadir_en(palabra)}")
        print(f"  2. Siempre añadir EN: {siempre_anadir_en(palabra)}")
        print(f"  3. Doblar consonante + EN: {anadir_en_y_doblar_consonante(palabra)}")
        print()
