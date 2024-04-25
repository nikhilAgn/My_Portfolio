//             Auto Commit & Deploy (node AutoDeploy "commit message")

const { exec } = require('child_process');

// Function to deploy to GitHub Pages
async function deployToGitHubPages(commitMessage) {
    try {
        // Step 1: Commit all changes
        console.log(`Committing all changes with message: "${commitMessage}"...`);
        await runCommand(`git add .`);
        await runCommand(`git commit -m "${commitMessage}"`);

        // Step 2: Push changes to GitHub
        console.log("Pushing changes to GitHub...");
        await runCommand('git push origin main');

        // // Step 3: Build your React project
        // console.log("Building React project...");
        // await runCommand('npm run build');

        // // Step 4: Deploy to GitHub Pages using 'npm run deploy'
        // console.log("Deploying to GitHub Pages...");
        // await runCommand('npm run deploy');
        
        console.log("Deployment successful!");
    } catch (error) {
        console.error("Error deploying to GitHub Pages:", error);
    }
}

// Function to run shell commands
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                console.log(stdout); // This line prints the output of the command
                resolve();
            }
        });
    });
}

// Read commit message from command line arguments
const commitMessage = process.argv[2];

// Check if commit message is provided
if (!commitMessage) {
    console.error("Error: Please provide a commit message.");
    process.exit(1);
}

// Trigger deployment with the provided commit message
deployToGitHubPages(commitMessage);
