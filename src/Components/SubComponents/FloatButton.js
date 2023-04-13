import React from "react"
import "./FloatButton.css"
import { Link } from "react-router-dom";

const FloatButton = () => {
  return (
    <div class="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
      <label class="fab" for="fabCheckbox">
        <span class="fab-dots fab-dots-1"></span>
        <span class="fab-dots fab-dots-2"></span>
        <span class="fab-dots fab-dots-3"></span>
      </label>
      <div class="fab-wheel">
        <Link to="tel:+919730582892" className="fab-action fab-action-1">
        <i class="bi bi-telephone-outbound-fill"></i>
        </Link>
        <Link to="sms:+919730582892" class="fab-action fab-action-2">
        <i class="bi bi-chat-dots-fill"></i>
        </Link>
        <Link to="https://wa.me/+919730582892?text=%20Hello%20Mrs.Vaibhavi%20More%20I%20want%20consultation%20on%20" class="fab-action fab-action-3" >
        <i class="bi bi-whatsapp"></i>
        </Link>
        
        <Link class="fab-action fab-action-4">
        <i class="bi bi-info-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default FloatButton;
