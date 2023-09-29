*******************************         12 Factor App          **************************************

1. Codebase: Each application should have a single codebase stored in version control. Multiple codebases indicate a distributed system, and each part of that system is treated as an application following the 12-factor principles.
Example: A web application with a single codebase hosted on a Git repository.

2. Dependencies: Declare and isolate dependencies explicitly to avoid version conflicts and simplify development. Manifest files should contain metadata for dependencies.
Example: A Python application that explicitly lists its required libraries and versions in a requirements.txt file.


3. Config: Keep configurations separate from source code by storing them in environment variables. This enables flexibility across different environments without compromising security.
Example: Storing database connection strings and API keys in environment variables instead of hardcoding them in code.

4. Backing Services: Treat external services as attached resources, allowing for easy interchangeability. For instance, switching databases should be as simple as changing connection details.
Example: Using a cloud-based database service like Amazon RDS and easily switching to a different database provider without changing the application code.


5. Build, Release, Run: Separate the deployment process into three phases: build, release, and run. This ensures clear separation of concerns and helps manage deployments effectively.
Example: Building a Java application into a JAR file during the build phase, releasing it with specific environment configurations, and running it as a separate process.

6. Processes: Applications should run as stateless processes that can be created and destroyed without affecting overall functionality. Data should be stored in a stateful datastore.
Example: Running multiple instances of a web server application behind a load balancer, where each instance can be started or stopped independently.  

7. Port Binding: Applications should export their services via port binding and be self-contained, eliminating the need for additional server software.
Example: As we use port 8000 for application.

8. Concurrency: Divide applications into smaller, independently scalable processes to enable easy horizontal scaling and better concurrency management.
Example: Breaking a monolithic application into microservices, each running independently and horizontally scalable to handle increased load.

9. Disposability: Ensure robustness by allowing for fast startup and graceful shutdown of processes. Failures in one process should not impact the application's overall functionality.
Example: Ensuring that a failed request or process termination does not impact the overall application's functionality or data integrity.

10. Development/Production Parity: Keep development, staging, and production environments as similar as possible to catch issues early and facilitate continuous deployment.
Example: Using the same operating system, libraries, and configurations in both the development and production environments to avoid unexpected issues.

11. Logs: Treat logs as event streams for debugging and monitoring, and don't tightly couple logging to the application.
Example: Storing application logs in a dedicated log file and treating them as a stream of events for monitoring and debugging.

12. Admin Processes:The twelve-factor methodology says that such scripts must be made a part of our codebase itself managed in the version control system. These tasks should also follow twelve-factor principles.
Example: Including database migration scripts as part of the application's codebase, allowing them to follow the same version control and deployment processes as the rest of the app.

*******************************         Atomic Design          **************************************

Atomic design is a methodology that involves breaking down interface design into five distinct stages, which work together to create a cohesive and hierarchical design system. These stages are as follows:

1. Atoms: Atoms are the fundamental building blocks of design. They represent the smallest, indivisible components of a user interface, such as buttons, lines, shapes, icons, text fields, and other basic elements.

2. Molecules: Molecules are created by combining two or more atoms. For example, a search form can be considered a molecule formed by combining an input field atom and a button atom. These molecules are relatively simple and serve specific functions within the interface.

3. Organisms: Organisms are more complex structures composed of molecules and/or atoms. They represent individual portions of the design that are self-contained and functional. Examples of organisms include a login page, a registration form, or a navigation menu.

4. Templates: Templates serve as the glue that brings together different organisms or individual sections of a design. They define the layout and structure of a page or a section of a page. Templates provide consistency and establish a framework for placing organisms within the design.

5. Pages: Pages are the final and specific instances of templates. They showcase what a user interface looks like with real content in place. Pages demonstrate how the design system works with actual representative content and data, making it easier for designers and stakeholders to visualize the end product.

By following the atomic design methodology, designers and developers can create interface design systems in a systematic and organized manner. This approach promotes reusability, consistency, and scalability in design projects, making it easier to manage and maintain complex user interfaces.