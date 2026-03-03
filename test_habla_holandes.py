"""
Tests for HablaHolandesEN transformations
"""
import unittest
from habla_holandes import (
    quitar_vocal_y_anadir_en,
    siempre_anadir_en,
    anadir_en_y_doblar_consonante
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


class TestComparacionTransformaciones(unittest.TestCase):
    """Tests comparing all three transformation methods"""
    
    def test_comparar_transformaciones(self):
        """Compare results of all three methods"""
        palabra = "libro"
        
        result1 = quitar_vocal_y_anadir_en(palabra)
        result2 = siempre_anadir_en(palabra)
        result3 = anadir_en_y_doblar_consonante(palabra)
        
        # They should all produce different results
        self.assertEqual(result1, "libren")
        self.assertEqual(result2, "libroen")
        self.assertEqual(result3, "libroen")


if __name__ == "__main__":
    unittest.main()
