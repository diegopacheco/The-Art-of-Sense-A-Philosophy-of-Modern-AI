# Glossary

## A

**A2A (Agent 2 Agent)**
Protocol for enabling communication and interaction between different AI agents.

**Action**
In reinforcement learning, a decision or move made by an agent.

**AGI (Artificial General Intelligence)**
A theoretical form of AI that would have human-like general intelligence, capable of understanding, learning, and applying knowledge across a wide range of tasks. Marketing hype often surrounds AGI claims, though true AGI capabilities remain unproven.

**AGI-ish**
Marketing term used to describe current LLM capabilities as approaching AGI. Part of the down ceiling effect where definitions are lowered to claim progress.

**AGI Vibes**
Marketing terminology suggesting LLMs have AGI-like characteristics without actually being AGI. Related to AGI-ish and part of misleading marketing practices.

**Agent**
In reinforcement learning, the learner or decision-maker that interacts with the environment.

**AI (Artificial Intelligence)**
The simulation of human intelligence processes by machines, especially computer systems. The book focuses on practical applications of AI in software engineering.

**AI Hallucination**
When AI generates information that appears plausible but is actually incorrect or made up. AI can create APIs that don't exist, generate code with runtime bugs, or ignore specific requests entirely.

**AI Input vs Output**
A methodology where developers use AI for input (research, learning, inspiration) while maintaining critical review responsibility rather than blindly accepting AI-generated output without evaluation.

**AI Scams**
Deceptive practices involving AI technology, including false AGI claims, wrapper solutions marketed as novel AI applications, and misleading marketing around AI capabilities.

**Agents**
Autonomous or semi-autonomous systems that can perform tasks, make decisions, and interact with environments using AI capabilities. True agents should react to events and be autonomous, but the industry often uses "agentic" to describe systems with agent-like characteristics but lacking full autonomy due to the down ceiling effect.

**Agentic**
Having some characteristics of an agent, but not a true autonomous agent. Used to describe behavior that resembles agents but lacks full autonomy. Term emerged as the ceiling was lowered on what constitutes a true agent.

**Agentic Behavior**
Behavior exhibited by agents that allows them to act autonomously in pursuit of defined goals, making decisions based on environment state.

**Aggregating**
Agent pattern involving combining multiple data sources or results into a unified response or output.

**AlphaGo**
Game-playing AI system using reinforcement learning.

**Amazon Q**
AWS coding agent that provides AI-powered assistance for software development tasks.

**Amoeba Age**
Early developmental stage of LLMs described by Yuval Harari, characterized by basic capabilities that will improve over time.

**Anomaly Detection**
Identifying unusual data points that deviate from normal patterns, commonly used in fraud detection and system monitoring.

**ASR (Automatic Speech Recognition)**
Technology for converting speech to text.

**API Key**
Authentication token required to access AI services programmatically for production deployment.

**ARU (Audible Response Unit) Strategy**
Strategy for safely using AI in production where user prompts are translated into finite numeric options rather than executing arbitrary commands, similar to traditional IVR systems.

**Artificial Savings**
Fabricated productivity gains or cost savings that are not sustainable or real, often claimed when using AI tools without proper measurement.

**Attention Mechanisms**
Core component of transformer architecture enabling models to focus on relevant parts of input when processing sequences.

**AudioLM**
Model developed by Google that can generate high-quality audio samples from text prompts.

**Auto-complete on Steroids**
Description of Generative AI systems as advanced prediction engines based on pattern matching.

**Autonomous Driving**
Application area for reinforcement learning in self-driving vehicles.

**Automated Testing**
Practice of using software to test software automatically, replacing manual testing.

**AWS Bedrock**
AWS service for accessing foundation models.

**Attack Vector**
Potential security vulnerability pathway that could be exploited by malicious actors, especially relevant for MCP security.

## B

**Bash Orchestration**
Running Claude Code as a Unix/Linux process enabling pipeline and automation workflows.

**Benchmark Gaming**
Practice where AI models exploit benchmark loopholes to achieve higher scores without genuinely improving capabilities.

**BERT**
Large Language Model built upon the Transformer architecture.

**Boundary Cases**
Test scenarios at the limits of valid input ranges or system capacity.

**Build Process**
Automated compilation and deployment process that can be monitored and optimized with AI assistance.

**Bash Mode / Interactive Mode**
A Claude Code feature enabling direct bash command execution for system operations by typing "!" prefix.

**Bat-and-Ball Problem**
Cognitive bias problem from Daniel Kahneman's research requiring System 2 thinking to solve correctly, often used to demonstrate human cognitive limitations.

**bump-version.sh**
Script used to increment version numbers in the book publication process.

**Bus Factor**
Measure of risk if key personnel are unavailable. "Bus Factor of 0" refers to complete dependency on AI without human knowledge. Traditional bus factor refers to risk if key personnel become unavailable, while the AI context emphasizes complete loss of human understanding.

## C

**Caching**
Agent pattern for storing and reusing frequently accessed data or results to improve performance and reduce redundant processing.

**cargo**
Rust's package manager and build tool, used to install mdbook.

**Catastrophic Forgetting**
Challenge in fine-tuning where a model loses previously learned knowledge when adapting to new tasks.

**ccstatusline**
MCP tool for customizing the Claude Code status line display.

**Changelog**
Document tracking changes, additions, and fixes across software versions, can be automated using AI by analyzing git history.

**Change and Adaptation**
The necessity for engineers and organizations to adapt to AI-driven disruption as AI becomes increasingly integrated into software development.

**Chroma**
Vector database for storing and querying embeddings.

**Cisco MCP Scanner**
Open source security tool for scanning and analyzing MCP servers for vulnerabilities.

**.claudeignore**
File specifying which files Claude Code should not read, similar to.gitignore for version control.

**CLAUDE.md**
Global configuration file for Claude Code behavior, containing project-specific instructions and preferences.

**Claude Code**
A specific AI tool/platform (Anthropic's Claude used for coding tasks) covered extensively in Chapter 5.

**Claude Opus**
Anthropic's LLM model.

**Claude Skills**
Anthropic's approach to building coding agents by bundling text and scripts together to create specialized capabilities.

**Claude Sonnet 4.5**
Anthropic's LLM model with 200,000 token context window.

**Claude Sonnet Corp**
Enterprise version of Claude with 1,000,000 token context window.

**CLI Agents**
Command-line interface based coding agents that run directly on local machines.

**Classification**
A Traditional AI/ML task involving categorizing data into predefined classes or categories based on learned patterns.

**Clever Hans Effect**
A phenomenon where an observer unconsciously gives cues to a subject, leading to apparent intelligent behavior that is actually based on picking up subtle hints rather than true understanding.

**Clustering**
A Traditional AI/ML unsupervised learning task involving grouping similar data points together without predefined labels.

**CI/CD (Continuous Integration/Continuous Deployment)**
Automated software development practices for building, testing, and deploying code.

**Code Coverage**
Metric measuring what percentage of code is executed by automated tests.

**Code Review**
Critical process of examining AI-generated or any code for correctness, security, and alignment with requirements before deployment. Essential when using AI.

**Codex**
OpenAI's coding agent available in both web sandbox and CLI versions, using specialized models for code generation.

**Coding Agents**
AI agents specifically designed or trained to generate, modify, and work with software code.

**Coding Dojo**
Practice environment where engineers work without AI using TDD, forcing manual skill development and maintaining proficiency.

**Compact (Claude Code)**
Command that summarizes and reduces context window usage by condensing conversation history.

**Configuration Ownership**
Responsibility for maintaining and managing configuration files and settings.

**Cohere**
Company providing LLM APIs.

**Container Registry**
Repository for storing and distributing container images, important for secure MCP usage and deployment workflows.

**Contract-Based Testing**
Testing based on contracts or agreements between services.

**Contrarian Feedback**
Learning technique where AI challenges your thinking to identify weaknesses.

**Context Engineering**
Modern term focusing on providing the right context to LLMs to get the best possible response, explicitly replacing the older term "prompt engineering".

**Context Window**
The amount of text/tokens an LLM can process at once. Larger context windows allow for processing more information simultaneously.

**Context7**
Service providing up-to-date library documentation to address LLMs' outdated training data, supporting over 49,317 libraries.

**Cool Down Period**
Limitation period in subscription-based plans when token budget is exhausted, temporarily restricting API usage.

**Core Business Logic**
Critical business logic and intellectual property that should never be created through "vibe coding" due to quality and proprietary concerns.

**Cosine Similarity**
Similarity measure used to compare embeddings based on the cosine of the angle between vectors.

**Critical Thinking**
Ability to analyze information objectively and make reasoned judgments, essential when using AI.

**Cypress**
End-to-end testing framework for web applications, can be used with AI to generate automated tests.

**Custom Agents**
Agents specifically built or configured for particular use cases or organizations, stored in ~/.claude/agents/ directory.

**Custom Commands**
User-defined commands in Claude Code stored as markdown files in ~/.claude/commands/ directory.

**CVE (Common Vulnerabilities and Exposures)**
Publicly disclosed security vulnerabilities.

## D

**DALL-E**
OpenAI's model that generates images from textual descriptions using transformer architecture and GANs.

**Daniel Kahneman**
Psychologist and author of "Thinking, Fast and Slow", referenced in discussions about System 1 and System 2 thinking applied to AI usage.

**Data Loss**
Risk in migrations where data might be lost during transition phases without proper backup and validation procedures.

**Data Structures and Algorithms**
Fundamental computer science concepts for organizing and processing data efficiently.

**DBSCAN**
Density-Based Spatial Clustering of Applications with Noise, an algorithm for clustering that can identify outliers.

**Decision Trees**
Machine learning algorithm using tree-like model of decisions for both classification and regression tasks.

**Debugging with AI using Images**
Technique for troubleshooting code issues by providing AI with visual representations (screenshots/images) of problems.

**Demo to Production**
Complex productionization phase remaining difficult despite AI assistance. References Waymo case showing 11+ years from 2014 demo to incomplete 2025 production deployment.

**Docker**
Containerization platform.

**Decision Criteria**
Framework for determining when and how to use AI effectively in different scenarios.

**Devil's Advocate**
Critical thinking approach where AI challenges assumptions and arguments to identify weaknesses.

**Determinism**
Property of producing identical outputs for identical inputs, which AI lacks due to its probabilistic nature.

**Diffusion Models**
Advanced approach for video generation.

**Dimensionality Reduction**
A Traditional AI/ML technique for reducing the number of variables/features in data while preserving meaningful information. Examples include PCA.

**Disruption**
The transformative impact of AI on industries and engineering practices, similar to impacts of internet and mobile phones.

**Documentation**
Using AI to generate and maintain code documentation, changelogs, and knowledge bases.

**Down Ceiling Effect / Hobbit House Effect**
Industry trend of lowering definitions and standards over time.

## E

**Edge Cases**
Unusual or extreme scenarios that occur at the boundaries of normal operation, important for comprehensive testing.

**Early Stopping**
Technique to prevent overfitting by stopping training at optimal point before the model over-learns.

**ElevenLabs**
Company providing APIs to generate high-quality speech from text using advanced neural network models.

**End-to-End Tests**
Tests that validate entire application workflows from user perspective.

**Error Handling**
Code patterns and practices for dealing with exceptions, failures, and unexpected conditions.

**Embeddings**
Numerical vector representations of text, images, or other data that capture semantic meaning. Essential for RAG and vector databases. Can represent words, sentences, or entire documents.

**Engineering with AI**
The practice of applying AI tools and methodologies to improve software development processes.

**Enterprise Integration Patterns (EIP)**
Design patterns by Gregor Hohpe and Bobby Woolf that AI agent patterns derive from.

**Environment**
In reinforcement learning, the external system with which the agent interacts.

**Euclidean Distance**
Similarity measure used to compare embeddings based on the straight-line distance between vectors.

**Evo by Snyk**
Commercial MCP scanning security solution for analyzing MCP servers.

**Explore Agent**
Claude Code specialized sub-agent for fast codebase exploration, supporting quick, medium, and thorough search modes.

## F

**Fabricated Productivity**
False or exaggerated productivity gains attributed to AI usage without accounting for increased review time, bug fixes, or quality issues.

**Fabricated Savings**
Unsustainable or illusory productivity improvements claimed from AI usage.

**faker.js**
JavaScript library for generating realistic test data, used in integration testing to create mock data for various scenarios.

**FTL (Faster Than Light)**
Metaphor describing the illusion that increasing code generation speed alone without improving other aspects of software development leads to problems, similar to trying to travel faster than light without upgrading other systems.

**Feed Phase**
First phase in RAG pattern where documents are ingested and converted to embeddings for vector database storage.

**Few-Shot**
Training technique providing a small number of examples to help models learn tasks.

**Few-Shot Examples**
Training technique providing examples to help models perform tasks better without extensive retraining.

**Filtering**
Agent pattern for removing unwanted data or responses before or after LLM processing.

**Fine Tuning**
Process of training a pre-trained model on specific domain data to adapt it to particular use cases without full retraining.

**FTL (Faster Than Light)**
Metaphor describing the illusion that increasing code generation speed alone leads to problems, similar to trying to travel faster than light without upgrading other systems.

## G

**GANs (Generative Adversarial Networks)**
Neural network architecture used in image generation models like DALL-E.

**Gartner's Hype Cycle**
Graphical representation of technology maturity and adoption phases.

**Gatling**
Stress testing and load testing framework for performance evaluation.

**Gaussian Mixture Models**
Clustering algorithm that assumes data points are generated from a mixture of Gaussian distributions.

**Gemini**
Google's LLM model used in various coding agents including Jules and Gemini CLI.

**Gemini 2.0 Flash**
Google's LLM model with 1,000,000 token context window.

**Gemini 2.0 Pro**
Google's LLM model with 2,000,000 token context window.

**General-Purpose Agent**
Claude Code sub-agent for multi-step task handling requiring autonomous complex operations.

**Generative AI**
AI systems that can generate new content, including text, code, images, and other media. The book focuses on using Generative AI for software engineering tasks. Works through predicting next tokens/sequences.

**Great Software Quality Collapse**
Current state of declining software quality despite more computational resources, attributed to various factors including over-reliance on AI without proper review.

**Git Archaeology for Troubleshooting**
Technique using git history to understand code evolution and diagnose issues.

**GitHub Actions**
CI/CD automation platform used for workflow automation, including book publishing.

**GitHub Copilot**
One of the first coding agents, integrated into VSCode and other IDEs, supporting multiple LLM models.

**GitHub Pages**
Static site hosting service used to publish websites and books online.

**Google Jules**
Web sandbox coding agent by Google backed by Gemini LLM models.

**GPT-3**
Large Language Model built upon the Transformer architecture.

**GPT-3.5**
OpenAI's LLM model with 4,096 token context window.

**GPT-4**
OpenAI's LLM model with 8,192 token context window.

**GPT-4-turbo**
OpenAI's LLM model with 128,000 token context window.

**GPT-5**
OpenAI's latest LLM model.

**Gradient Boosting**
Machine learning ensemble technique that builds models sequentially to correct errors of previous models.

**Grok 3**
XAI's LLM model with 1,000,000 token context window.

**Grok 4**
XAI's LLM model.

**Grok 4 Fast**
XAI's LLM model with 2,000,000 token context window.

**Guardrails**
Safety mechanisms to prevent undesired AI behavior and ensure safe production usage.

## H

**Happy Path**
Testing scenario covering the expected, successful flow through code without errors or edge cases.

**Happy Path Testing**
Testing approach focusing on expected, successful execution flows.

**Human in the Loop**
Pattern where AI generates outputs but a human reviews and approves them before execution or deployment to production, critical for safe AI usage beyond engineering teams.

**Headless Mode**
Running Claude Code via command line without interactive interface for automation and scripting.

**Hierarchical Clustering**
Clustering algorithm that builds a hierarchy of clusters using a tree-like structure.

**Hooks (Claude Code)**
Event-driven automation triggers that execute scripts on specific events in Claude Code, allowing custom workflows.

**HumanEval**
Software engineering benchmark for evaluating AI coding capabilities.

**Hybrid Approach**
Video generation technique that can generate videos in seconds.

**Hyperparameter Tuning**
Process of adjusting parameters in fine-tuning to optimize model performance.

**Hugging Face**
Platform for sharing and accessing machine learning models.

## I

**IDE-based Agents**
AI coding assistants integrated into development environments like VSCode.

**Idempotent**
Operations that produce the same result regardless of how many times they are executed, easier to test.

**Incompetence Illumination**
Teaching technique where AI deliberately mixes wrong and correct answers to train critical thinking.

**Injection Attacks**
Class of security vulnerabilities where untrusted data is executed as code, analogous to unsanitized AI prompt execution.

**Input Sanitization**
Security practice of cleaning and validating user inputs to prevent injection attacks and ensure safe execution.

**Integration Tests**
Tests that verify how different components work together, requiring test data and infrastructure setup.

**Intellectual Honesty Detector**
AI teaching method that catches shallow understanding by asking learners to explain concepts back.

**Internal Shared Libraries**
Reusable code libraries shared across projects within an organization, often problematic for ownership.

**Image Generation**
Generative AI capability for creating visual content from text descriptions or other inputs.

**Interactive Mode**
Claude Code feature enabling direct bash command execution, also known as Bash Mode.

**Inventory (Migrations)**
Process of cataloging and assessing existing systems, code, and infrastructure before planning migrations.

**IntelliJ IDEA**
JetBrains IDE that integrates with AI coding assistants.

## J

**Jenkins**
Automation server for CI/CD pipelines, mentioned as tech asset requiring ownership.

**Jest**
JavaScript testing framework.

**JetBrains**
Company producing IDEs like IntelliJ IDEA that integrate with AI coding assistants.

**JUnit**
Java testing framework.

## K

**K-Means Clustering**
Popular clustering algorithm that partitions data into k clusters by minimizing variance within each cluster.

**K6**
Load testing framework for performance evaluation.

**Kiro**
AWS coding agent, a fork of VSCode implementing Spec Driven Development approach.

**Knowledge Base Generation**
Using AI to create and maintain comprehensive documentation systems.

**Kubernetes (K8s)**
Container orchestration platform.

## L

**Lambda**
AWS serverless compute service.

**LDA (Linear Discriminant Analysis)**
Dimensionality reduction technique that finds linear combinations of features for classification.

**Lead Time**
Software development metric measuring time from starting work on feature to deployment, noted as not improving despite AI tools.

**Learning from AI**
Process of using AI as an educational tool while maintaining critical thinking and verification.

**Leftovers**
Resources or code remaining after migrations that need cleanup.

**Lessons Learned**
Process of capturing and applying knowledge from past experiences and mistakes.

**Linter**
Tool that analyzes code for potential errors, style violations, and code quality issues.

**Linear Regression**
Fundamental regression algorithm modeling relationship between variables using a linear equation.

**LLaMA 3**
Meta's LLM model with 8,192 token context window.

**LLaMA 4**
Meta's LLM model.

**LLM (Large Language Model)**
A type of AI model trained on massive amounts of text data that can understand and generate human-like text. Examples include GPT, Claude, and other similar models. LLMs work by predicting the next sequence of tokens. Cannot truly "think" despite marketing claims.

**llms.txt / llms-full.txt**
Text files at website roots helping LLMs navigate and understand site content, providing structured documentation.

**Logistic Regression**
Classification algorithm using logistic function to model probability of categorical outcomes.

**Loss Function**
Mathematical function optimized during model training to minimize prediction errors.

**LSH (Locality-Sensitive Hashing)**
Technique for approximate nearest neighbor search in high-dimensional spaces, used in vector database implementations.

**LSP (Language Server Protocol)**
Standard protocol that MCP is compared to for understanding its architecture and functionality.

**LLMs as Slot Machines**
Concept by Cory Doctorow describing LLMs as fundamentally random/probabilistic systems predicting next tokens, not deterministic reasoning engines.

## M

**Markdown**
Lightweight markup language used to write documentation and book content.

**mdbook**
A Rust-based tool for creating books from markdown files, featuring built-in search, unique URLs per page, and syntax highlighting for code snippets.

**Make-A-Track**
Meta's model that generates music tracks from text descriptions.

**Marketing and AI**
The often misleading promotion of AI capabilities, including false AGI claims and overstated application benefits.

**Markething**
Portmanteau of "marketing" and criticism of misleading AI marketing claims.

**Marketing Agent (Claude Code)**
Specialized agent for translating technical content to plain language.

**MCP (Model Context Protocol)**
A protocol for connecting AI models to external tools and data sources, enabling extended capabilities. Created by Anthropic in 2024.

**MCP Authorization Patterns**
Security patterns for proper authorization in MCP implementations, ensuring safe upstream API calls.

**MCP Client**
Component within AI host that connects to MCP servers.

**MCP Guardrails**
Security practices for safely using MCP servers including vending, scanning, and isolation.

**MCP Host**
The AI agent or tool that contains MCP clients.

**MCP Scanner**
Security tool for analyzing MCP servers for vulnerabilities.

**MCP Server**
External service providing tools and data to AI models via Model Context Protocol.

**Mean Shift Clustering**
Clustering algorithm that finds dense regions by shifting data points toward mode of distribution.

**Memory Leaks**
Runtime issue when applications fail to release memory properly, often detected during stress testing.

**MidJourney**
Independent research lab's model for generating visually appealing and artistic images from text prompts.

**Migrations**
Process of moving systems, code, libraries, or data from one platform, language, or infrastructure to another.

**Migrations in Phases**
Structured approach to performing migrations incrementally rather than all at once.

**Milvus**
Vector database for storing and querying embeddings.

**Mirror Effect / Mirror on Steroids**
Concept that AI amplifies existing abilities: good engineers become better with AI; poor engineers become worse.

**MDD (Model Driven Development)**
Earlier development approach similar to Spec Driven Development where models define implementation, mentioned as predecessor to SDD.

**Model Card**
Documentation describing LLM capabilities, limitations, training data, and intended use cases for transparency.

**MoCoGAN**
Model that separates motion and content to generate videos with coherent motion.

**Mocks**
Test objects that verify interactions and method calls during testing.

**Model**
In reinforcement learning, a representation of the environment that the agent uses to predict the next state and reward.

**Mutation Testing**
Testing technique that modifies code to verify test effectiveness.

## N

**Negative Cases**
Test scenarios covering invalid inputs, error conditions, or failure modes.

**Narrow AI**
AI designed for specific tasks, as opposed to general intelligence.

**Naive Bayes**
Classification algorithm based on Bayes' theorem with strong independence assumptions between features.

**Nearest Neighbor Queries**
Search operation in vector databases finding closest matching vectors based on similarity metrics.

**Noise Reduction**
Technique in dimensionality reduction removing irrelevant features while preserving meaningful information.

**Non-idempotent**
Operations that produce different results when executed multiple times, requiring special testing setup.

**Natural Language Processing (NLP)**
Field revolutionized by the Transformer architecture for processing and understanding human language.

**npm**
Node.js package manager.

## O

**Onboarding**
Process of integrating new engineers into teams and codebases, enhanced by AI as a private tutor.

**OpenAI**
Company that provides LLM models and coding agents.

**OpenCode**
Open source coding agent that works with multiple LLM models.

**OpenAPI**
API documentation specification format that AI coding agents can read to generate tests and understand API structure.

**Orchestration**
Agent pattern for coordinating multiple AI operations or tools in sequence or parallel.

**Orphaned Resources**
Infrastructure or code assets without clear ownership or maintenance.

**Overfitting**
Challenge in fine-tuning where a model learns training data too specifically and loses generalization ability.

**Ownership**
Responsibility for maintaining and managing code, infrastructure, and resources.

## P

**Payable Tokens**
Tokens that incur cost in API-based pricing plans.

**PCA (Principal Component Analysis)**
Dimensionality reduction technique that identifies principal components explaining maximum variance in data.

**pgvector**
PostgreSQL extension for vector database functionality.

**PII (Personally Identifiable Information)**
Sensitive personal data that should be excluded from AI processing for privacy and security.

**Pinecone**
Vector database for storing and querying embeddings.

**Placeholder Personas**
Using AI in different roles for feedback and analysis such as Architect, Security Expert, Marketing Specialist.

**Plan Agent**
Claude Code specialized agent for planning tasks and breaking down complex problems into manageable steps.

**Playwright**
End-to-end testing framework for web applications.

**podman**
Container management tool, mentioned as docker-compose alternative.

**Policy**
In reinforcement learning, a strategy or rule that the agent uses to make decisions.

**Postgres MCP**
MCP server for reading data from PostgreSQL database tables in plain English.

**PR (Pull Request)**
Proposed code changes submitted for review before merging into main codebase.

**Precision and Reproducibility**
Challenge with AI systems: inability to guarantee identical outputs for identical inputs due to probabilistic nature.

**Private Teacher**
AI acting as personalized instructor providing tailored learning experiences.

**Pre-trained Model**
Model that has already acquired knowledge during initial training phase, used as starting point for fine-tuning.

**Proficiency**
Level of skill and expertise required to perform tasks effectively without constant reference.

**Prompt Engineering**
Craft of writing effective instructions for AI models to achieve desired outcomes, largely replaced by context engineering.

**Prompt Library**
Collection of pre-written prompts demonstrating AI capabilities and best practices.

**Prompts**
Instructions or queries given to AI systems to generate desired outputs.

**Proof of Concepts (POCs)**
Small-scale implementations to test feasibility and validate ideas before full-scale development.

**Proof Reader**
Using AI to check spelling, grammar, and document quality in written content.

**Property-Based Testing**
Testing based on properties that should always hold true rather than specific outputs.

## R

**Remote Code Execution**
Security vulnerability pattern where attackers can execute arbitrary code, analogous to unsanitized AI prompt execution.

**Retrospectives**
Agile practice of reflecting on past work to drive lessons learned and improvements, mentioned as necessary when using AI.

**RAG (Retrieval-Augmented Generation)**
Technique combining document retrieval with LLM generation, allowing AI to cite and incorporate external information into responses. Reduces costs, mitigates hallucinations, and provides up-to-date information.

**Random Forest**
Ensemble learning method using multiple decision trees for classification and regression.

**Regularization**
Technique to prevent overfitting by adding penalty terms to the loss function.

**Regression Tests**
Tests ensuring existing functionality still works after changes.

**Remote Code Execution**
Security vulnerability pattern where attackers can execute arbitrary code, analogous to unsanitized AI prompt execution.

**Randomness in AI**
Inherent probabilistic nature of LLMs making outputs non-deterministic even with identical inputs.

**Regression**
Traditional ML task of predicting continuous numerical values based on input features.

**Reinforcement Learning (RL)**
Machine learning paradigm where agents learn by interacting with environments and receiving rewards or penalties.

**Respect in Software Engineering**
Professional principle that code should be reviewed and understood by creators before sharing/deploying.

**Responsible AI Usage**
Using AI as input/research tool while maintaining human judgment, code review, and verification responsibilities.

**Retrieval Phase**
Second phase in RAG pattern where queries are converted to embeddings to search vector database for relevant documents.

**Role Playing**
AI capability to assume different personas (architect, security expert, marketing specialist, etc.) to provide varied perspectives.

**Reward**
In reinforcement learning, a scalar feedback signal that indicates how we'll the agent is doing.

**Robotics**
Application area for reinforcement learning.

**Routing**
Agent pattern for directing requests to appropriate services or models based on content or conditions.

**Runbook**
Documentation of procedures and processes for system operations.

**Rust**
Systems programming language used for mdbook and mentioned in migration contexts.

## S

**Sandbox-Based Agents**
AI coding agents that operate in isolated environments separate from user's machine for security.

**Sandboxing**
Running code in isolated environments for security, though noted as poor developer experience.

**Scaling Issues**
Challenges when systems grow in size, complexity, or load during stress testing and production usage.

**Security Audit**
Systematic evaluation of system security.

**SDD (Spec Driven Development)**
Development approach implemented by AWS Kiro where specifications drive implementation.

**Security and MCPs**
Considerations for safely integrating external tools and protocols with AI systems to prevent unauthorized access or malicious operations.

**Selenium**
Browser automation framework used for testing web applications.

**Self-Attention Mechanism**
Key innovation of Transformers that allows models to weigh the importance of different words in a sentence relative to each other.

**Semantic Meaning**
The meaning captured by embeddings that allows for effective text comparisons.

**Semi-Supervised Learning**
Machine learning paradigm combining labeled and unlabeled data for training.

**Sentiment Analysis**
Analyzing emotional tone and intent in text, applicable to emails, customer feedback, and communication review.

**Slack MCP**
MCP server for sending messages to Slack teams.

**Snapshot Testing**
Testing by comparing current output to saved snapshots.

**Smoke Test**
High-level test verifying critical system functionality without exhaustive coverage.

**Socratic Interrogation**
Teaching method where AI asks progressively deeper questions instead of providing answers, forcing critical thinking.

**SQL Injection**
Security attack where malicious SQL code is inserted through user inputs, prevented by input sanitization.

**State Management**
Practices for handling and coordinating application state across components in software systems.

**Strategic Work**
High-level planning, architecture, and decision-making work requiring deeper thinking.

**Stubs**
Test doubles that provide predefined responses to method calls during testing.

**Sub-Agents (Claude Code)**
Independent agents spawned by Claude Code, each with their own 200k token context window.

**Sub-Agents Spawning**
Claude Code feature where independent agents are created, each with their own 200k token context window.

**Solutions vs Wrappers**
Philosophy distinguishing genuine innovations from superficial API wrappers. Many AI startups are wrappers rather than true solutions.

**System 1 and System 2 Thinking**
Concepts from Daniel Kahneman's "Thinking, Fast and Slow" applied to AI usage. System 1 is fast, intuitive thinking; System 2 is slower, analytical thinking. The book argues against relying solely on System 1 when using AI for productivity.

**SORA**
OpenAI's most advanced video generation model.

**Sound Generation**
Generative AI capability for creating audio content.

**Spectral Clustering**
Clustering algorithm using eigenvalues of similarity matrix to reduce dimensionality before clustering.

**Splitting**
Agent pattern for dividing large tasks or data into smaller manageable pieces for processing.

**SQS (Simple Queue Service)**
AWS message queue service, mentioned as infrastructure requiring ownership.

**Stable Diffusion**
Open-source model by Stability AI for generating images from text descriptions using diffusion process.

**Stability AI**
Company that developed Stable Diffusion image generation model.

**State**
In reinforcement learning, a snapshot of the environment at a given time.

**Status Line**
Customizable information display at bottom of Claude Code interface showing current state.

**Summarization**
LLM task of condensing long text into shorter summaries while retaining key information.

**Sunsetting**
Process of retiring old technology or systems.

**Supervised Learning**
Machine learning paradigm where models learn from labeled training data to make predictions.

**Support Vector Machines (SVM)**
Machine learning algorithm for classification and regression using hyperplanes to separate data.

**Swagger / OpenAPI**
API documentation specification format that AI coding agents can read to generate tests and understand API structure.

**SWE-bench**
Software engineering benchmark for evaluating AI coding capabilities.

**Synthetic Data Generation**
Creating artificial but realistic test data for testing purposes.

**System Prompt**
Instructions defining how an AI model should behave and respond to user inputs. Sets the behavior and style of the LLM.

## T

**Tactical Work**
Operational, day-to-day tasks as opposed to strategic, high-level planning work.

**Tagging**
Practice of labeling resources and assets for organization and ownership tracking.

**t-SNE (t-Distributed Stochastic Neighbor Embedding)**
Dimensionality reduction technique particularly effective for visualizing high-dimensional data in 2D or 3D.

**TDD (Test-Driven Development)**
Development methodology writing tests before implementation to ensure code quality.

**Team Erosion**
Phenomenon where team knowledge degrades over time as people leave, leading to orphaned tech assets.

**Technical Debt**
Accumulated shortcuts and suboptimal solutions in codebases that make migrations and maintenance more difficult.

**Terraform**
Infrastructure as code tool for managing cloud infrastructure.

**Test Coverage**
Breadth and depth of testing across application functionality and code paths.

**Test Data**
Data used to evaluate final model performance.

**Test Doubles**
Generic term for objects used in testing to replace real dependencies (includes stubs, mocks, fakes).

**Test Induction**
Process of setting up proper testing infrastructure, including test data, environment configuration, and testing interfaces.

**Testing**
Creating test coverage as prerequisite for migrations and code changes.

**Testing Interfaces**
Custom APIs created specifically to expose and manipulate application state for testing purposes in non-production environments.

**Thinking, Fast and Slow**
Book by Daniel Kahneman referenced in discussions about System 1 and System 2 thinking applied to AI usage.

**Thinking Mode**
Feature in some LLMs showing internal reasoning process before generating final response.

**Text Generation**
Generative AI capability for creating written content from prompts or other inputs. LLMs process system and user prompts to generate responses.

**TGAN (Temporal Generative Adversarial Networks)**
Model that focuses on generating videos by modeling temporal dynamics.

**Token Budget**
Allocated amount of tokens for AI processing, with ultrathink using up to 10,000+ tokens.

**Tokens**
The basic units that LLMs process. Text is broken down into tokens, and LLMs predict the next token in a sequence. Understanding tokens is key to understanding how Generative AI works and costs.

**Traditional AI / Traditional ML**
Earlier AI/ML approaches including regression, classification, clustering, and dimensionality reduction.

**Training Data**
Data used to train machine learning models.

**Transformer Architecture**
Neural network architecture introduced in "Attention is All You Need" paper by Vaswani et al. in 2017, revolutionizing NLP.

**Transformers**
Neural network architecture underlying modern LLMs, enabling efficient processing of sequences through attention mechanisms.

**Translation**
LLM task of converting text from one language to another.

**Trial and Error**
Vibe coding practice of generating code without review, relying on iterative execution attempts rather than careful planning.

**Troubleshooting**
Using AI to help diagnose and resolve problems in code, systems, and architectures including log analysis and debugging.

**Two Steps Forward, One Step Back**
Characterization of AI progress: advancement comes with limitations, hallucinations, ignored requests, and mistakes.

## U

**Ultrathink**
A Claude Code feature providing extended reasoning capabilities with larger token budget up to 10,000 tokens for complex problems, allowing more thorough analysis than normal thinking mode.

**Underfitting**
Model training problem where model is too simple to capture data patterns, requiring more complexity or features.

**Unit Tests**
Automated tests focusing on individual components or functions in isolation.

**Unsupervised Learning**
Machine learning paradigm where models find patterns in unlabeled data without predefined categories.

**User Prompt**
The actual input from the user that the LLM responds to, processed along with system prompt.

**Validation Data**
Data used to tune model parameters during training.

## V

**VALUE Function**
In reinforcement learning, function estimating how beneficial it's for an agent to be in a given state.

**Vector Databases**
Specialized databases storing and querying embeddings efficiently, essential infrastructure for RAG systems. Examples include Pinecone, Weaviate, Milvus, Chroma, and Postgres pgvector.

**Vending (Vetting + Defending)**
Security practice of thoroughly checking MCP servers before use, combining vetting and defending.

**VERSION File**
File tracking the current version number of the book.

**Vibe Coding**
Practice coined by Andrej Karpathy in February 2025 where developers generate prompts and do not look at generated code, assuming AI handles everything correctly. The book argues this is bad practice for serious software engineering, especially for core business logic.

**Vibe Payments**
Satirical concept introduced in the book suggesting that if developers use vibe coding without reviewing code, payments should also be random, reflecting lack of due diligence.

**Vintage Coding**
Practice of coding without AI assistance to maintain core skills and proficiency, often practiced in coding dojos.

**Video Generation**
Generative AI capability for creating video content from text descriptions or other inputs. Still experimental and not ready for production.

**VideoPoet**
Large Language Model for zero-shot video generation.

**VQ-VAE-2**
Hierarchical model using vector quantization to generate high-quality videos.

**VSCode (Visual Studio Code)**
Microsoft's development environment and IDE, frequently forked and extended for coding agents like GitHub Copilot and AWS Kiro.

## W

**Waterfall**
Sequential software development methodology considered anti-agile.

**Waymo**
Self-driving car project that demonstrates the gap between demo and production, taking over 11 years from initial demo in 2014.

**Weaviate**
Vector database for storing and querying embeddings.

**Whisper**
OpenAI's automatic speech recognition system that transcribes spoken language into text.

## X

**XAI**
Company that provides Grok LLM models.

## Z

**Zero to Demo**
Rapid prototyping phase made faster with AI assistance. References Waymo case study where demos are possible quickly but production takes significantly longer.

**Zig**
Systems programming language mentioned as a learning target.
