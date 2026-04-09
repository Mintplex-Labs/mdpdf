# Language Support Test

This document tests font rendering for various scripts and languages.

---

## Latin (English)

The quick brown fox jumps over the lazy dog.

**Bold text** and *italic text* and ***bold italic***.

`Inline code` and numbers: 1234567890

## Latin (Extended)

- French: Ça c'est très intéressant. Où êtes-vous?
- German: Größe, Übung, Äpfel
- Spanish: ¿Cómo estás? ¡Hola! Año nuevo
- Portuguese: Ação, coração, não

---

## Korean (Hangul) 한국어

안녕하세요! 한글 테스트입니다.

대한민국은 민주공화국이다.

**굵은 글씨** 테스트

가나다라마바사아자차카타파하

### Mixed Korean and English

This is a 테스트 of mixed 한국어 and English text.

서울 Seoul 부산 Busan 인천 Incheon

---

## Japanese (日本語)

こんにちは！日本語テストです。

ひらがな: あいうえお かきくけこ

カタカナ: アイウエオ カキクケコ

漢字: 東京 大阪 日本

### Mixed Japanese and English

Welcome to 東京! The weather in 大阪 is nice.

---

## Chinese Simplified (简体中文)

你好！这是中文测试。

中华人民共和国

**粗体文字** 测试

一二三四五六七八九十

### Mixed Chinese and English

Welcome to 北京! Shanghai 上海 is beautiful.

---

## Greek (Ελληνικά)

Γεια σου κόσμε!

Αβγδεζηθικλμνξοπρστυφχψω

ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ

---

## Cyrillic (Русский)

Привет мир!

Быстрая коричневая лиса прыгает через ленивую собаку.

абвгдеёжзийклмнопрстуфхцчшщъыьэюя

АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ

---

## Emoji 😀

Common emoji: 👋 🌍 🎉 ✨ 🚀 💻 📝 ✅ ❌ ⚠️

Faces: 😀 😃 😄 😁 😊 🥰 😎 🤔 😢 😡

Animals: 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🦁

---

## Code Block Test

```python
def greet(name: str) -> str:
    """Greet someone in multiple languages."""
    return f"Hello {name}! 안녕 {name}! こんにちは {name}!"

# Test: 한글 コメント 注释
print(greet("World"))
```

---

## Table with Mixed Languages

| Language | Hello | Thank You |
|----------|-------|-----------|
| English | Hello | Thank you |
| Korean | 안녕하세요 | 감사합니다 |
| Japanese | こんにちは | ありがとう |
| Chinese | 你好 | 谢谢 |
| Russian | Привет | Спасибо |
| Greek | Γεια σου | Ευχαριστώ |

---

## Numbers and Punctuation

- Korean: 1, 2, 3 → 일, 이, 삼
- Japanese: 1, 2, 3 → 一, 二, 三
- Chinese: 1, 2, 3 → 一, 二, 三

Special punctuation:
- Korean: 《》「」『』
- Japanese: 「」『』【】
- Chinese: 《》「」『』

---

*End of test document*
