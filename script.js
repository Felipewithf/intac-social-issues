// Example: Animate floating images on scroll or add interactivity
$(document).ready(function () {
  // Example: Slightly move images on scroll for a parallax effect
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    $(".floating-img").each(function (i) {
      $(this).css(
        "transform",
        `translateY(${scrollTop * (0.05 + i * 0.02)}px)`
      );
    });
  });
});

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
      $("#modalTitle").text(data.title);
      $("#resourceList").html(
        data.links
          .map(
            (link) =>
              `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`
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
