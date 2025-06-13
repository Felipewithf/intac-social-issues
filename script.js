$(document).ready(function () {
  var img = new Image();
  img.src = "img/root.webp";
  img.onload = function () {
    // Calculate the displayed height based on the image's aspect ratio and 100vw width
    var aspectRatio = img.height / img.width;
    var displayedWidth = $(window).width();
    var displayedHeight = displayedWidth * aspectRatio;
    $(".root-background").css("height", displayedHeight + "px");
  };

  // Optional: Update height on window resize
  $(window).on("resize", function () {
    if (img.complete) {
      var aspectRatio = img.height / img.width;
      var displayedWidth = $(window).width();
      var displayedHeight = displayedWidth * aspectRatio;
      $(".root-background").css("height", displayedHeight + "px");
    }
  });
});

$(document).ready(function () {
  // Show modal with resources on image click
  $(".floating-img").on("click", function () {
    const imgClass = $(this)
      .attr("class")
      .split(" ")
      .find((c) => c.startsWith("img"));
    const data = resources[imgClass];
    if (data) {
      $("#modalImage").attr("src", data.image);
      $("#modalImageSubtitle").text(data.imageSubtitle);
      $("#modalTitle").text(data.title);
      $("#modalDescription").text(data.description);
      $("#resourceList").html(
        data.links
          .map(
            (link) =>
              `<li><a href="${link.url}" target="_blank" style="white-space: normal">${link.text}</a></li>`
          )
          .join("")
      );
      $("#resourceModal").fadeIn(200);
    }
  });

  // Close modal on close button or outside click
  $(".close-btn").on("click", function () {
    $("#resourceModal").fadeOut(200);
  });
  $("#resourceModal").on("click", function (e) {
    if (e.target === this) {
      $(this).fadeOut(200);
    }
  });
});
