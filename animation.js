$(document).ready(function()
{
    let firstskill = 1;
    let lastskill = 4;

    $("#part_2").children().hide();

    $(".cat").hide();
    $(".FWEB").show();
    setInterval(function()
    {
        AnimateOnScroll("#part_2", firstskill, lastskill);
        AnimateOnScroll("#part_3", 0, 0);
    }, 200);
});

function progressBarManager(pbar, maxval)
{
    let minval = 0;
    $(pbar).attr("value", minval);
    let minterval = setInterval(function()
    {
        
        if(minval <= maxval)
        {
            pbar.attr("value", minval);
            minval++;
        }
        else 
        {
            clearInterval(minterval);
        }
    }, 10);
}

function ScrollTo(id)
{
    HideMenu();
    pos = $(id).offset().top;
    $('html, body').animate(
    {
        scrollTop: pos
    }, 1000);
}

function AnimateOnScroll(id, fs, ls)
{
    if($('html, body').scrollTop() >= ($(id).offset().top - 300))    
    {
        if(!$(id).children().is(":visible"))
        {
            if(id == "#part_2")
            {
                for(let i = fs; i <= ls; i++)
                {
                    progressBarManager($(".p"+i), $(".p"+i).get(0).id);
                }
            }
            $(id).children().fadeIn();
        }
    }
    else
    {
        $(id).children().fadeOut();
        if(id == "#part_2")
        {
            for(let i = 1; i <= 6; i++)
            {
                progressBarManager($(".p"+i), "0");
            }
        }
    }
}

function ShowMenu()
{
    $(".infos").animate(
    {
        left: 0
    });

    $(".arrow i").removeClass("fa-arrow-right");
    $(".arrow i").addClass("fa-arrow-left");
}

function MenuHandler()
{
    if($(".infos").position().left == 0)
    {
        HideMenu();
    }
    else if($(".infos").position().left == -155)
    {
        ShowMenu();
    }
}

function HideMenu()
{
    $(".infos").animate(
    {
        left: "-155px"
    });
    
    $(".arrow i").removeClass("fa-arrow-left");
    $(".arrow i").addClass("fa-arrow-right");
}

function SwitchSkill(skillbtn, skilln, mins, maxs)
{

    $(".cat").hide();
    $(".skillbtn").removeClass("is-primary");
    skillbtn.addClass("is-primary");
    $(skilln).fadeIn();
    for(let i = mins; i <= maxs; i++)
    {
        progressBarManager($(".p"+i), $(".p"+i).get(0).id);
    }

    firstskill = mins;
    lastskill = maxs;
}