<template>
  <div class="card p-4 mt-3 discussion-board">
    <div class="d-flex justify-content-between align-items-center">
      <p class="fw-bold small mb-0">Discussion board</p>
    </div>
    <hr />
    <div class="conversation-wrapper p-2">
      <div class="thread">
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 06:43 AM</span
            >
          </div>
          <div class="message-content"><p>I'm the engagement manager</p></div>
          <!---->
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 06:46 AM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/4765_652482adbc38320231010064605.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 06:50 AM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/Capture (1)_6524839f3b99820231010065007.PNG"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 06:51 AM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/BlackMarble_2016_928m_india_6524840c8765f20231010065156.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 02:25 PM</span
            >
          </div>
          <div class="message-content">
            <p>
              "The discussion board message field is a rich text editor where it
              contains the following buttons:
            </p>
            <p>- Bold</p>
            <p>- Italic</p>
            <p>- Underline</p>
            <p>- Attach image"</p>
            <p>
              The user must click the "Post" button after typing the message in
              the field to be posted in the discussion board.&nbsp;
            </p>
            <p>
              Once the message is posted, the discussion board logs the date and
              time of message and displays it above the bubble chat post of the
              user with their full name displayed.
            </p>
            <p>
              The user can attach a single image only per message. Upon
              attaching, the attach image button should be disabled unless the
              user deletes the image by clicking the X button.
            </p>
            <p>The allowed image format should be PNG and JPG only.</p>
            <p>
              The images attached in the discussion board can be previewed in
              the same by clicking the image. Once clicked, a preview image
              should pop up where it can be downloaded directly to the user's
              device.
            </p>
            <p>
              Attaching of images in discussion board per request ID should only
              have a maximum of 10MB image size limit. When a request has
              reached this limit and a user tries to attach an image, a warning
              pop up should appear where it says: "The discussion board has
              reached its maximum size limit for attaching images."
            </p>
            <p>"The discussion board should be open to all users such as:</p>
            <p>- Engagement manager and partner</p>
            <p>- LoS Risk management reviewers and approver</p>
            <p>- Firmwide Risk and Quality reviewers and approver</p>
            <p>- ELT members</p>
            <p><br /></p>
            <p>
              Note: Only the users who have submitted the request, reviewed
              and/or approved the request and users with pending or ongoing
              review and/or approval should be able to post and reply in the
              discussion board."
            </p>
            <p>
              When there is a new comment posted in the discussion board, the
              app should send an email notification EN0031 to the requestor. The
              link in the email should redirect the user to the request overview
              page provided that they are already authenticated or logged in to
              the app.&nbsp;
            </p>
            <p>
              Once the discussion board has reached the 10mb maximum file size,
              the attach image button should be disabled. A tooltip should
              appear when the user hovers over this button saying: "The
              discussion board has reached its maximum size limit for attaching
              images."
            </p>
            <p>
              "The file cabinet is a section where all the files attached in the
              request ID should be placed and viewable by all users involved in
              the request. It contains the following categories:
            </p>
            <p>- Engagement letter</p>
            <p>- Terms of business</p>
            <p>- Data sharing agreement</p>
            <p>- Other files</p>
            <p><br /></p>
            <p>
              Only the most recently uploaded file should be displayed per
              category. "
            </p>
            <p>
              "When users click View more, a modal should appear with a table
              that consists of the columns:
            </p>
            <p>- File name</p>
            <p>- Date uploaded</p>
            <p>- Uploaded by"</p>
            <p>
              For PDF files, there should be another tab that will open and
              display the preview of the pdf. It should be downloadable by
              clicking the download button.
            </p>
            <p>
              Other file types/format should only be downloaded directly to the
              user's device once clicked.
            </p>
            <p>
              On top of the table, there should be a (badge) counter that counts
              the number of files inside the cabinet.
            </p>
          </div>
          <!---->
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >10 October 2023, 05:11 PM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/Image_20230622_155008_221_652515557ddfa20231010171149.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >11 October 2023, 09:27 AM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/Image_20230622_155008_221_6525fa097648320231011092737.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >11 October 2023, 09:27 AM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/illustration_6525fa1a2ea6620231011092754.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >11 October 2023, 02:26 PM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/pexels-micah-boerma-1008739_6526403372cb720231011142659.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="message-wrapper">
          <div class="message-sender">
            <p class="fw-bold small mb-0">John Does</p>
            <span class="time smaller a-text-grey ms-2"
              >11 October 2023, 03:02 PM</span
            >
          </div>
          <!---->
          <div class="message-attachment">
            <img
              src="https://azures3like.blob.core.windows.net/elt/discussion_board_attachments/20230114_170214_652648798daae20231011150217.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div id="message-input">
      <!---->
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
      <div id="toolbar" class="ql-toolbar ql-snow">
        <button class="a-disabled a-btn a-btn-sm a-btn-pink" id="post-btn">
          Post
        </button>
      </div>
      <button class="a-btn hidden">Reload</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscussionBoard",
};
</script>

<style scoped>
#post-btn {
  color: #fff;
  margin-left: auto;
  width: fit-content;
  background-color: #d93954;
}

.ql-snow .ql-editor img {
  width: 250px;
  max-width: 100%;
}

#image {
  display: none;
}

#message-input .ql-editor *,
.conversation-wrapper .ql-editor * {
  font-size: 14px;
  /* font-style: normal; */
}

#message-input .ql-editor.ql-blank::before {
  font-style: normal;
}

#message-input .ql-underline {
  padding-right: 1.5rem;
  margin-right: 0.25rem;
  border-right: 1px solid #dedede;
}

.img-holder {
  width: 240px;
  margin-left: 1rem;
  position: relative;
}

.img-attachment {
  width: 100%;
  height: auto;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  max-width: 100%;
}

.remove-img {
  top: 5px;
  right: 1%;
  z-index: 1;
  position: absolute;
  background-color: #fff;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

#preview-modal {
  width: 60rem;
}

#preview-modal .d-flex {
  align-items: center;
  justify-content: space-between;
}

#preview-modal.modal .modal-body {
  max-height: 60vh;
  overflow-y: scroll;
  background-color: #2d2d2d;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
}

#preview-modal .close-modal {
  width: 100%;
  text-align: right;
}

#preview-image {
  width: 100%;
  margin: 0 auto;
}
</style>
