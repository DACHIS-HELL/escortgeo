import React, { useState } from 'react';

const ProfileSummary = () => {
  const [summary, setSummary] = useState('');

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const updateSummary = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/update-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers as needed
        },
        body: JSON.stringify({
          summary: summary,
        }),
      });

      if (response.ok) {
        console.log('Summary updated successfully');
      } else {
        console.error('Error updating summary:', response.status);
      }
    } catch (error) {
      console.error('Error updating summary:', error);
    }
  };

  return (
    <div className='summ'>
      <textarea
        id="summary"
        name="summary"
        rows="4"
        cols="50"
        value={summary}
        onChange={handleSummaryChange}
        placeholder="დაამატე ტექსტი"
        >
      </textarea>
      <div>
        <button onClick={updateSummary}>განახლება</button>
      </div>
    </div>
  );
};

export default ProfileSummary;
