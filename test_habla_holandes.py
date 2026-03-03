"""
Tests for HablaHolandesEN transformations
"""
import unittest
from habla_holandes import (
    quitar_vocal_y_anadir_en,
    siempre_anadir_en,
    anadir_en_y_doblar_consonante,
    quitar_vocal_y_anadir_of
)


class TestQuitarVocalYAnadirEn(unittest.TestCase):
    """Tests for quitar_vocal_y_anadir_en function"""
    
    def test_palabra_termina_en_vocal(self):
        """Test words ending with a vowel"""
        self.assertEqual(quitar_vocal_y_anadir_en("casa"), "casen")
        self.assertEqual(quitar_vocal_y_anadir_en("gato"), "gaten")
        self.assertEqual(quitar_vocal_y_anadir_en("perro"), "perren")
        
    def test_palabra_termina_en_consonante(self):
        """Test words ending with a consonant"""
        self.assertEqual(quitar_vocal_y_anadir_en("sol"), "slen")
        self.assertEqual(quitar_vocal_y_anadir_en("pan"), "pnen")
        
    def test_palabra_con_vocales_acentuadas(self):
        """Test words with accented vowels"""
        self.assertEqual(quitar_vocal_y_anadir_en("está"), "esten")
        self.assertEqual(quitar_vocal_y_anadir_en("música"), "músicen")
        
    def test_palabra_vacia(self):
        """Test empty string"""
        self.assertEqual(quitar_vocal_y_anadir_en(""), "en")
        
    def test_palabra_sin_vocales(self):
        """Test words without vowels (edge case)"""
        self.assertEqual(quitar_vocal_y_anadir_en("xyz"), "xyzen")


class TestSiempreAnadirEn(unittest.TestCase):
    """Tests for siempre_anadir_en function"""
    
    def test_palabras_simples(self):
        """Test simple words"""
        self.assertEqual(siempre_anadir_en("casa"), "casaen")
        self.assertEqual(siempre_anadir_en("perro"), "perroen")
        self.assertEqual(siempre_anadir_en("sol"), "solen")
        self.assertEqual(siempre_anadir_en("pan"), "panen")
        
    def test_palabra_vacia(self):
        """Test empty string"""
        self.assertEqual(siempre_anadir_en(""), "en")
        
    def test_palabras_con_acentos(self):
        """Test words with accents"""
        self.assertEqual(siempre_anadir_en("música"), "músicaen")
        self.assertEqual(siempre_anadir_en("está"), "estáen")


class TestAnadirEnYDoblarConsonante(unittest.TestCase):
    """Tests for anadir_en_y_doblar_consonante function"""
    
    def test_palabra_termina_en_consonante(self):
        """Test words ending with consonant - should double it"""
        self.assertEqual(anadir_en_y_doblar_consonante("sol"), "sollen")
        self.assertEqual(anadir_en_y_doblar_consonante("pan"), "pannen")
        self.assertEqual(anadir_en_y_doblar_consonante("amor"), "amorren")
        
    def test_palabra_termina_en_vocal(self):
        """Test words ending with vowel - should not double anything"""
        self.assertEqual(anadir_en_y_doblar_consonante("casa"), "casaen")
        self.assertEqual(anadir_en_y_doblar_consonante("perro"), "perroen")
        self.assertEqual(anadir_en_y_doblar_consonante("gato"), "gatoen")
        
    def test_palabra_vacia(self):
        """Test empty string"""
        self.assertEqual(anadir_en_y_doblar_consonante(""), "en")
        
    def test_palabras_con_vocales_acentuadas(self):
        """Test words with accented vowels at the end"""
        self.assertEqual(anadir_en_y_doblar_consonante("está"), "estáen")
        self.assertEqual(anadir_en_y_doblar_consonante("café"), "caféen")


class TestQuitarVocalYAnadirOf(unittest.TestCase):
    """Tests for quitar_vocal_y_anadir_of function"""
    
    def test_palabra_termina_en_vocal(self):
        """Test words ending with a vowel"""
        self.assertEqual(quitar_vocal_y_anadir_of("ruso"), "rusof")
        self.assertEqual(quitar_vocal_y_anadir_of("casa"), "casof")
        self.assertEqual(quitar_vocal_y_anadir_of("gato"), "gatof")
        
    def test_palabra_termina_en_consonante(self):
        """Test words ending with a consonant"""
        self.assertEqual(quitar_vocal_y_anadir_of("sol"), "slof")
        self.assertEqual(quitar_vocal_y_anadir_of("pan"), "pnof")
        
    def test_palabra_con_vocales_acentuadas(self):
        """Test words with accented vowels"""
        self.assertEqual(quitar_vocal_y_anadir_of("está"), "estof")
        self.assertEqual(quitar_vocal_y_anadir_of("música"), "músicof")
        
    def test_palabra_vacia(self):
        """Test empty string"""
        self.assertEqual(quitar_vocal_y_anadir_of(""), "of")
        
    def test_palabra_sin_vocales(self):
        """Test words without vowels (edge case)"""
        self.assertEqual(quitar_vocal_y_anadir_of("xyz"), "xyzof")


class TestComparacionTransformaciones(unittest.TestCase):
    """Tests comparing all three transformation methods"""
    
    def test_comparar_transformaciones_palabra_consonante(self):
        """Compare results of all three methods with a word ending in consonant"""
        palabra = "pan"
        
        result1 = quitar_vocal_y_anadir_en(palabra)
        result2 = siempre_anadir_en(palabra)
        result3 = anadir_en_y_doblar_consonante(palabra)
        
        # All three methods produce different results for words ending in consonants
        self.assertEqual(result1, "pnen")   # Remove last vowel 'a' -> 'pn' + 'en'
        self.assertEqual(result2, "panen")  # Just add 'en' -> 'pan' + 'en'
        self.assertEqual(result3, "pannen") # Double 'n' and add 'en' -> 'pan' + 'n' + 'en'
        
        # Verify they're all different
        self.assertNotEqual(result1, result2)
        self.assertNotEqual(result2, result3)
        self.assertNotEqual(result1, result3)
    
    def test_comparar_transformaciones_palabra_vocal(self):
        """Compare results of all three methods with a word ending in vowel"""
        palabra = "libro"
        
        result1 = quitar_vocal_y_anadir_en(palabra)
        result2 = siempre_anadir_en(palabra)
        result3 = anadir_en_y_doblar_consonante(palabra)
        
        # For words ending in vowel, methods 2 and 3 produce the same result
        self.assertEqual(result1, "libren")  # Remove last vowel 'o' -> 'libr' + 'en'
        self.assertEqual(result2, "libroen") # Just add 'en' -> 'libro' + 'en'
        self.assertEqual(result3, "libroen") # No doubling, just add 'en' -> 'libro' + 'en'
        
        # Verify result1 is different from the others
        self.assertNotEqual(result1, result2)
        self.assertEqual(result2, result3)


if __name__ == "__main__":
    unittest.main()
