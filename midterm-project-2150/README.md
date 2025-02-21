### **Midterm Project 2150**

##### **Project Structure**
```
/midterm-project
├── /api                  # Backend (Node.js)
│   ├── index.js          # API implementation 
├── /app                  # Frontend (HTML, SCSS, JS, Webpack)
│   ├── assets            # Assest folder
│   │     └── images      # images folder
│   │     └── fonts       # fonts folder
│   ├── index.html        # Main HTML file
│   ├── index.js          #
│   ├── index.scss        #
│   ├── global.js         #
│   ├── global.scss       #
│   ├── package.json      #
│   └── webpack.config.js # Webpack configuration
├── Dockerfile            # Docker configuration for the app
├── default.conf          # Nginx configuration
└── README.md
```

##### **Instructions**
1. **Setup**:  
   - Download the `project.zip` file from the LEA platform.  
   - Extract it into your project root:  
     - **Windows**: `C:/Projects/midterm-project/`  
     - **Linux/macOS**: `~/Projects/midterm-project/`  

2. **Git Repository**:  
   - Initialize a Git repository in the extracted directory.  
   - Create a **public GitHub repository** named `midterm-tt4-project`.
   - Make your first commit with the message `"first commit"`.  

3. **Dockerfile Adjustments**:  
   - Update the `Dockerfile` to ensure the app exports to the **default port** for the Nginx web server.  
   - Commit these changes with a descriptive message.  

4. **Frontend Products**:  
   - In the `/app` directory, create a new `list-products.html` file.  
   - Add a page with 12 [Bootstrap Cards](https://getbootstrap.com/docs/5.0/components/card/), 
     each card need filled by 1   product (image, title, small description, price and add cart button).
   - Examples: 
     - [Example 1](https://bootstrapexamples.com/@juanmz/product-card)
     - [Example 2](https://www.w3schools.com/bootstrap5/bootstrap_cards.php)  
   - You can use these [products images](https://www.pexels.com/search/product/), Remember to save the files in your project under the `assets/images` folder, and ensure you reference the `src` attribute in `<img>` correctly.
   - Use **Bootstrap** for styling and maintain consistency with the layout (menu and sidebar) from the `index.html` page.
      - remember to check the example of SCSS importing in `index.js`
      - Remember, for each page you create, you need to create the corresponding JS and SCSS files. After that, make sure to declare them in `webpack.config.js`.
      - check for webpach.config.js for additional changes to make everything work better
   - Commit these changes with a descriptive message.  

5. **Testing**:  
   - Test your frontend application by running the development server:  

   ```shell
   npm run start
   ```

6. **Docker Image**:  
   - Build and test the application locally.  
   - Generate a Docker image with the name:  

     `<your_dockerhub_username>/midterm-tt4-project`

      - use the tag `v1.0.0`

      - example:

         ```shell
         docker build -t <your_dockerhub_username>/midterm-tt4-project:v1.0.0 . 
         ```  

   - Run the container locally to ensure functionality.  
   - Push the Docker image to your **DockerHub account**.  
      - example
      ```shell
      docker push <your_dockerhub_username>/midterm-tt4-project:v1.0.0
      ```  

7. **Submission**:  
   - Create a `project.txt` file containing:  
     - The URL of your GitHub repository.  
     - The URL of your Docker Hub repository.  
   - Submit this file via the LEA platform.  
