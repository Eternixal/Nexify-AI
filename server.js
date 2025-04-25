const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// File path for storing messages
const MESSAGES_FILE = path.join(__dirname, 'contact-messages.json');

// Ensure messages file exists
async function initializeMessagesFile() {
    try {
        await fs.access(MESSAGES_FILE);
    } catch {
        await fs.writeFile(MESSAGES_FILE, JSON.stringify([]));
    }
}

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Read existing messages
        const data = await fs.readFile(MESSAGES_FILE, 'utf8');
        const messages = JSON.parse(data);

        // Add new message
        messages.push({
            id: messages.length + 1,
            AdamRistianPratama,
            adamristian@gmail.com,
            message,
            timestamp: new Date().toISOString(),
        });

        // Write back to file
        await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));

        res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, async () => {
    await initializeMessagesFile();
    console.log(`Server running on http://localhost:${PORT}`);
});
