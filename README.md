# Posting App C3P0

Modern Angular application to consume and display information from [Hacker News API](https://hn.algolia.com). This application serves as the frontend for [Posting App R2D2](https://github.com/JesusIgnacio/posting-app-r2d2). You know what I mean? C3P0 + R2D2, unconditional friends from Star Wars! 🤖

## 🚀 Recent Modernization (v2.0.0)

This application has been completely modernized from Angular 8 to Angular 17 with:

- **Angular 17.3.0** with standalone components architecture
- **TypeScript 5.4.5** with strict type checking
- **Modern Material Design** with enhanced UI/UX
- **Improved Performance** with lazy loading and optimizations
- **Enhanced Error Handling** with retry logic and user feedback
- **Security Updates** - eliminated 135+ vulnerabilities
- **Docker Support** with Node.js 18 Alpine

## 🛠 Tech Stack

* **Frontend**: [Angular 17](https://angular.io/) with standalone components
* **UI Framework**: [Angular Material 17](https://material.angular.io/)
* **Build Tool**: [Angular CLI 17](https://cli.angular.io/)
* **Language**: [TypeScript 5.4](https://www.typescriptlang.org/)
* **HTTP Client**: RxJS 7.8 with retry logic
* **Containerization**: [Docker](https://www.docker.com/) with Node.js 18

## 📋 Prerequisites

- **Node.js** 18+ 
- **npm** 8+
- **Angular CLI** 17+ (optional, can use npx)
- **Backend**: [Posting App R2D2](https://github.com/JesusIgnacio/posting-app-r2d2) running on port 3001

## 🚀 Quick Start

### Option 1: Local Development

```bash
# Clone the repository
git clone <repository-url>
cd posting-app-c3p0

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npx ng serve

# Open browser at http://localhost:4200
```

### Option 2: Docker

```bash
# Build Docker image
docker build -t posting-c3p0:latest .

# Run container
docker run -p 4200:4200 posting-c3p0:latest

# Access at http://localhost:4200
```

## ⚙️ Configuration

The application connects to the R2D2 backend API. Update the API URL in:

- **Development**: `src/environments/environment.ts`
- **Production**: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3001/api'  // Update this URL
};
```

## 🎯 Features

- **📊 Post Listing** with pagination and sorting
- **🔍 Real-time Search** and filtering
- **🗑️ Post Management** (delete functionality)
- **⚡ Loading States** with spinners and progress indicators
- **🚨 Error Handling** with retry mechanisms and user feedback
- **📱 Responsive Design** with Material Design components
- **🔄 Auto-refresh** capabilities

## 🏗️ Architecture

This application uses Angular 17's modern standalone components architecture:

- **Standalone Components**: No NgModules required
- **Functional Guards**: Modern routing with functional guards
- **Signals**: Reactive programming with Angular signals
- **Dependency Injection**: Simplified DI with `inject()` function
- **TypeScript Strict Mode**: Enhanced type safety

## 🐳 Docker Support

The application includes a modern Dockerfile with:

- **Node.js 18 Alpine** for smaller image size
- **Multi-stage builds** for production optimization
- **Security best practices** with non-root user
- **Optimized caching** for faster builds

## 🔧 Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 📝 API Integration

Ensure the R2D2 backend is running on `http://localhost:3001` with the following endpoints:

- `GET /api/posts/` - Fetch posts
- `DELETE /api/posts/:id` - Delete post

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Note**: Make sure the [Posting App R2D2](https://github.com/JesusIgnacio/posting-app-r2d2) backend is running on port 3001 to see data in the application.

For questions or issues, please open a GitHub issue.

**JCastillo** - Original Creator  
**Modernized with Angular 17** 🚀
