# 🎄 Amigo Invisible - Aplicación React Native

Una aplicación móvil para organizar intercambios de regalos navideños con amigos y familiares.

## 🚀 Características Implementadas

### ✅ **Sistema de Autenticación Completo**

- **Pantalla de Login** con validación Formik + Yup
- **Pantalla de Registro** con confirmación de contraseña  
- **Integración con Supabase Auth** para signIn/signUp
- **Validaciones robustas**: email válido, contraseña mínimo 6 caracteres
- **Estados de loading** en botones durante peticiones
- **Manejo de errores** con SweetAlert 
- **Navegación automática** a Home tras login exitoso

### ✅ **Biblioteca de Componentes UI Reutilizables**

- **Button**: Múltiples variantes (primary, secondary, outline, danger), tamaños, iconos, loading
- **Input**: Integrado con Formik, validación, error display, password toggle
- **Avatar**: Soporte imágenes, fallback iniciales, múltiples tamaños
- **Card**: Contenedor con elevación, padding personalizable
- **Header**: Navegación con back button, título, acciones
- **Logo**: Componente de marca con Gift icon
- **EmptyState**: Para pantallas vacías con icono, título, descripción

### ✅ **Design System Completo**

- **Colores**: Tema navideño (rojo, verde, dorado)
- **Tipografía**: Escalable (h1-h4, body, caption)
- **Espaciado**: Grid consistente de 4px
- **Bordes**: Sistema de radius unificado
- **Sombras**: Cross-platform optimizadas

### ✅ **Arquitectura y Stack Técnico**

- **React Native con Expo** v54.0.10
- **TypeScript** con tipado estricto
- **NativeWind/Tailwind** para estilos
- **Formik + Yup** para formularios y validación
- **Supabase** para backend y autenticación
- **React Navigation** para navegación entre pantallas
- **Lucide React Native** para iconos
- **Zustand** para manejo de estado (instalado)

## 🛠️ Configuración e Instalación

### 1. **Requisitos Previos**
```bash
# Node.js 18+ y npm/yarn
# Expo CLI
npm install -g @expo/cli

# iOS: Xcode (para simulador)
# Android: Android Studio (para emulador)
```

### 2. **Instalación**
```bash
# Clonar el repositorio
git clone <tu-repo>
cd amigo-invisible

# Instalar dependencias
npm install --legacy-peer-deps
```

### 3. **Configuración de Supabase**
```bash
# Crear archivo .env desde el ejemplo
cp .env.example .env

# Editar .env con tus credenciales de Supabase:
EXPO_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

### 4. **Base de Datos Supabase**
Crear tabla `profiles` en tu proyecto Supabase:
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Política para que usuarios vean su propio perfil
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Política para que usuarios actualicen su propio perfil  
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

### 5. **Ejecutar la Aplicación**
```bash
# Iniciar servidor de desarrollo
npx expo start

# Para limpiar cache si hay problemas
npx expo start --clear
```

## 📱 Estructura del Proyecto

```
src/
├── components/ui/          # Componentes UI reutilizables
│   ├── Button/
│   ├── Input/  
│   ├── Avatar/
│   ├── Card/
│   ├── Header/
│   ├── Logo/
│   ├── EmptyState/
│   └── index.ts           # Exports centralizados
├── screens/               # Pantallas de la app
│   ├── auth/             
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── index.ts
│   ├── HomeScreen.tsx     # Temporal para testing
│   └── index.ts
├── theme/                 # Design System
│   ├── colors.ts         # Paleta de colores
│   ├── typography.ts     # Escalas tipográficas
│   ├── spacing.ts        # Grid de espaciado
│   ├── radius.ts         # Border radius
│   ├── shadows.ts        # Sistema de sombras
│   └── index.ts
├── utils/                 # Utilidades
│   ├── alert.ts          # Alertas estandarizadas
│   ├── icons.ts          # Sistema de iconos
│   ├── helpers.ts        # Funciones auxiliares
│   ├── validations.ts    # Esquemas Yup
│   └── index.ts
├── services/             # Servicios externos
│   ├── supabase.ts       # Cliente Supabase
│   ├── auth.ts           # Servicios de autenticación
│   └── index.ts
└── navigation/           # Configuración de navegación
    ├── AppNavigator.tsx  # Navegador principal
    └── index.ts
```

## 🎯 **Funcionalidades de Autenticación**

### **Pantalla de Login**
- ✅ Input de email con validación
- ✅ Input de contraseña con toggle de visibilidad
- ✅ Validación en tiempo real con Formik + Yup
- ✅ Loading state durante autenticación
- ✅ Manejo de errores con alertas personalizadas
- ✅ Navegación automática a Home tras éxito
- ✅ Botón para ir a registro

### **Pantalla de Registro** 
- ✅ Campos: nombre, email, contraseña, confirmar contraseña
- ✅ Validaciones robustas (formato email, complejidad contraseña)
- ✅ Confirmación de contraseña matching
- ✅ Creación automática de perfil en base de datos
- ✅ Manejo de confirmación por email
- ✅ Header con botón atrás
- ✅ Navegación a Login tras registro

### **Validaciones Implementadas**
```typescript
// Login
- Email: formato válido + requerido
- Contraseña: mínimo 6 caracteres + requerido

// Registro  
- Nombre: 2-50 caracteres + requerido
- Email: formato válido + requerido
- Contraseña: mínimo 6 chars + mayúscula + minúscula + número
- Confirmar: debe coincidir con contraseña
```

## 🎨 **Design System**

### **Colores**
```typescript
PRIMARY: "#d63384"        // Rojo navideño
SECONDARY: "#198754"      // Verde navideño  
ACCENT: "#ffc107"         // Dorado
SUCCESS/ERROR/WARNING     // Semánticos
BACKGROUND/SURFACE        // Fondos
TEXT_PRIMARY/SECONDARY    // Textos
```

### **Componentes UI**
Todos los componentes siguen patrones consistentes:
- ✅ **TypeScript estricto** con interfaces completas
- ✅ **Integración con Design System** usando tokens
- ✅ **Accesibilidad** con testIDs
- ✅ **Optimización** con React.memo
- ✅ **Flexibilidad** con props opcionales

## 🚀 **Estado del Proyecto**

### **✅ Completado (100%)**
- [x] Sistema de autenticación completo
- [x] Biblioteca de componentes UI  
- [x] Design System navideño
- [x] Integración Supabase
- [x] Navegación entre pantallas
- [x] Validaciones robustas
- [x] Manejo de errores
- [x] Estados de loading

### **🔄 Próximos Pasos**
- [ ] Pantallas principales de la app (Home, Grupos, Perfil)
- [ ] Funcionalidad de intercambio de regalos
- [ ] Sistema de grupos y invitaciones
- [ ] Lista de deseos
- [ ] Notificaciones push
- [ ] Tests unitarios e integración

## 📱 **Testing**

Para probar la aplicación:

1. **Escanea el QR** con la app Expo Go
2. **Registra una cuenta** nueva
3. **Verifica el email** (opcional según configuración)
4. **Inicia sesión** con las credenciales
5. **Navega** entre pantallas

### **Credenciales de prueba** (después de registrar):
```
Email: tu-email@ejemplo.com
Contraseña: MinPassword123
```

## 🐛 **Troubleshooting**

### **Problemas comunes:**

1. **Error de bundler**: `npx expo start --clear`
2. **Problemas de dependencias**: `npm install --legacy-peer-deps`
3. **Error de Supabase**: Verificar credenciales en `.env`
4. **Cache issues**: Limpiar cache de Expo y Metro

### **Logs útiles:**
```bash
# Ver logs detallados
npx expo start --verbose

# Limpiar todo el cache
npx expo start --clear --reset-cache
```

---

## 🎄 **¡Felices Fiestas!** 

Tu app de **Amigo Invisible** está lista para llevar la magia navideña a dispositivos móviles. 

**Stack tecnológico robusto + Design System elegante + UX fluida = Experiencia navideña memorable** 🎁

---

*Desarrollado con ❤️ usando React Native, Expo, TypeScript y Supabase*