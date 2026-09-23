(() => {
  const trigger = document.querySelector('#feedbackBtn');
  const dialog = document.querySelector('#feedbackDialog');
  const form = document.querySelector('#feedbackForm');
  const message = document.querySelector('#feedbackMessage');
  const type = document.querySelector('#feedbackType');
  const status = document.querySelector('#feedbackStatus');
  const email = document.querySelector('#feedbackEmail');
  const copy = document.querySelector('#feedbackCopy');
  let context = '';
  function report() {
    return ['Chemistry Mastery Lab feedback', '', 'Type: ' + type.value,
      'Activity: ' + context, 'Site: https://mychemlab.vercel.app', '',
      message.value.trim()].join('\n');
  }
  function updateEmail() {
    email.href = 'mailto:importcult@aol.com?subject=' + encodeURIComponent('Chemistry Lab: ' + type.value) + '&body=' + encodeURIComponent(report());
    status.textContent = '';
  }
  trigger.addEventListener('click', () => {
    context = document.querySelector('#main h2')?.textContent || 'Chemistry Lab';
    document.querySelector('#feedbackContext').textContent = context;
    updateEmail();
    dialog.showModal();
    message.focus();
  });
  document.querySelector('#feedbackClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => trigger.focus());
  message.addEventListener('input', updateEmail);
  type.addEventListener('change', updateEmail);
  form.addEventListener('submit', event => event.preventDefault());
  function valid() {
    if (!message.value.trim()) {
      status.textContent = 'Tell us what happened or what you would like to improve.';
      message.focus();
      return false;
    }
    return form.reportValidity();
  }
  email.addEventListener('click', event => {
    if (!valid()) { event.preventDefault(); return; }
    status.textContent = 'Finish by pressing Send in your email app. Nothing is sent automatically. If no app opens, use Copy feedback and paste it into an email to importcult@aol.com.';
  });
  copy.addEventListener('click', async () => {
    if (!valid()) return;
    try {
      await navigator.clipboard.writeText(report());
      status.textContent = 'Copied! Paste into an email to importcult@aol.com, then send it. Your feedback has not been sent yet.';
    } catch {
      status.textContent = 'Copy is unavailable in this browser. Select and copy your message below, then email it to importcult@aol.com.';
      message.focus();
      message.select();
    }
  });
})();
