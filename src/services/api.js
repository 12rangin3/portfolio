// Local storage key for storing contact messages
const STORAGE_KEY = "contact_messages";

function readMessages() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function writeMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

// Contact API (mocked using localStorage)
export const submitContactForm = async (data) => {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 300));

  const messages = readMessages();
  const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
  const newMsg = {
    id: nextId,
    name: data.name,
    email: data.email,
    message: data.message,
    is_read: false,
    created_at: new Date().toISOString(),
  };
  messages.push(newMsg);
  writeMessages(messages);
  return { success: true, data: newMsg };
};

// Get all contact messages (admin)
export const getAllContactMessages = async () => {
  await new Promise((r) => setTimeout(r, 200));
  return readMessages();
};

// Mark contact message as read
export const markMessageAsRead = async (messageId) => {
  await new Promise((r) => setTimeout(r, 200));
  const messages = readMessages();
  const idx = messages.findIndex((m) => m.id === messageId);
  if (idx === -1) {
    throw { message: "Message not found" };
  }
  messages[idx].is_read = true;
  writeMessages(messages);
  return messages[idx];
};
