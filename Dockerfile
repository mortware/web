# Stage 1: Build the Vite frontend
FROM node:20-alpine as frontend-build

# Set the working directory for the Vite app
WORKDIR /app

# Copy Vite app's package.json and install dependencies
COPY web/package*.json ./
RUN npm ci

# Copy the rest of the Vite app code and build it
COPY web/ ./
RUN npm run build

# Stage 2: Build the ASP.NET Core API with .NET 8
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS api-build

# Set the working directory for the API project
WORKDIR /src

# Copy the ASP.NET Core API project files
COPY api/src/Mortware.Web ./

# Restore and build the API project
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Stage 3: Final runtime image with .NET 8
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Set the working directory for the API app
WORKDIR /app

# Copy the ASP.NET Core API app from the build stage
COPY --from=api-build /app/publish ./

# Copy the Vite frontend from the frontend build stage to wwwroot
COPY --from=frontend-build /app/dist ./wwwroot

# Expose the port the app will run on
EXPOSE 80

# Start the ASP.NET Core API
ENTRYPOINT ["dotnet", "Mortware.Web.dll"]
