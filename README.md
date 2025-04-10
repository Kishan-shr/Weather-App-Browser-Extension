# 🌦️ Weather App Browser Extension

A sleek and simple browser extension to fetch real-time weather updates for any city using the powerful OpenWeatherMap API. Built for ease-of-use with a clean user interface.

---

## 🌟 Features

- 🔍 **City Weather Lookup** – Search for the current weather in any city
- 🌡️ **Real-time Updates** – Displays live temperature and weather description
- ❌ **Error Handling** – Alerts when city is not found
- ⌨️ **Keyboard Support** – Press Enter to search
- 📱 **Responsive Design** – Works on various screen sizes

---

## 🛠️ Technologies Used

| Technology            | Icon                                     |
|----------------------|------------------------------------------|
| HTML5                | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="30" /> |
| CSS3                 | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="30" />   |
| JavaScript (ES6+)    | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="30" /> |
| OpenWeatherMap API   | 🌤️                                        |
| Manifest V3          | 🧾                                        |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/weather-extension.git
cd weather-extension
```

### 2. Configure API Key
Create a `config.js` file:
```js
// config.js
export const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```
> ⚠️ **Keep this key private and don't commit it.**

### 3. Load the Extension in Chrome
1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the project folder

---

## 📁 Project Structure
```
weather-extension/
├── index.html
├── style.css
├── script.js
├── config.js        // Add your API key here
├── manifest.json
└── README.md
```

---

## 📄 manifest.json Highlights
```json
{
  "manifest_version": 3,
  "name": "Weather App",
  "version": "1.0",
  "description": "Get real-time weather updates for any city.",
  "action": {
    "default_popup": "index.html",
    "default_title": "Weather App"
  },
  "permissions": [],
  "icons": {
    "48": "icon.png"
  }
}
```

---

## 🚀 Future Enhancements
- 🌍 Geolocation-based weather
- 🌙 Dark/Light mode
- 📊 Additional weather stats (wind, humidity, etc.)
- 🌐 Multi-language support

---

## 📚 License

Licensed under the [MIT License](LICENSE).

---

## 📆 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for the weather data API
- Icons via [Devicon](https://devicon.dev/)

---

Happy coding! ✨

## Author
Developed with ❤️ by KISHAN SHARMA
linkedin : https://www.linkedin.com/in/kishanshr/
