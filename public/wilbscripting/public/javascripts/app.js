$(() => {
    let farmingRuns = [];
    let farmingTasks = [];

    let activeTask = undefined;

    function setInventory(items) {
        let topPos = 15;
        let leftPos = 55;
        for (let i = 0; i < 28; i++) {
            leftPos += 45;

            if (Math.floor(i % 4) == 0) {
                topPos += 35;
                leftPos = 55;
            }

            let element = `<img src="https://oldschool.runescape.wiki/images/a/a7/%27perfect%27_gold_bar.png" style="position: absolute; top: ${topPos}px; left: ${leftPos}px;">`;

            $('#inventory').prepend(element);
        }
    }

    $('#start').on('click', (e) => {
        e.preventDefault();

        app.start();
    });

    $('#grab-equipment').on('click', (e) => {
        e.preventDefault();

        app.getEquipment();
    });


    $('#grab-inventory').on('click', (e) => {
        e.preventDefault();

        app.getInventory();
    });
    $('#add-farm-task').on('click', (e) => {
        e.preventDefault();

        addFarmingTask();
    });

    $('#plant').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        app.filterPatches($('#plant').val());
    });

    $('#remove-farm-task').on('click', (e) => {
        e.preventDefault();

        if (activeTask !== undefined) {
            // Get the location of this task
            let location = activeTask.find('.location').text();


            // Remove the farm task from our array
            farmingTasks = farmingTasks.filter((task) => task.location != location);

            // Remove the row from the table
            activeTask.remove();
        }
    });

    $('#add-farm-run').on('click', (e) => {
        e.preventDefault();

        addFarmingRun();
    });

    $('#farm-task-table > tbody').on('click', '.task', function () {
        if (activeTask !== undefined)
            activeTask.removeClass('active');


        activeTask = $(this);

        activeTask.addClass('active');
    });

    function addFarmingTask() {
        let plant = $('#farm-task-form #plant').val();
        let location = $('#farm-task-form #location').val();
        let compost = $('#farm-task-form #compost').val();
        let payToProtect = $('#farm-task-form #pay-to-protect').is(":checked");
        let payToRemove = $('#farm-task-form #pay-to-remove').is(":checked");

        if (isTaskAtLocation(location)) {
            // Err
            console.log("TAKE");
            app.alert("Task at this location already exists.")
        } else {
            let farmTask = {
                plant: plant,
                location: location,
                compost: compost,
                payToProtect: payToProtect,
                payToRemove: payToRemove
            };

            console.log(farmTask);

            let obj = `<tr class="task"><td class="plant">${farmTask.plant}</td> <td class="location">${farmTask.location}</td><td class="compost">${farmTask.compost}</td> </tr>`;

            $('#farm-task-table > tbody').append(obj);

            farmingTasks.push(farmTask);
        }
    }

    function getEquipment() {
        let equipment = $('.equipment-img').map(function () {
            return {
                id: $(this).data("id"),
                slot: $(this).data("slot")
            }
        }).get();

        return equipment;
    }

    function getInventory() {
        let equipment = $('.inventory-img').map(function () {
            return $(this).data("id")
        }).get();
    }

    function addFarmingRun() {
        let farmRunName = $('#run-name').val();

        let farmRun = {
            name: farmRunName,
            equipment: getEquipment(),
            inventory: getInventory(),
            farmingTasks: farmingTasks
        };

        farmingRuns.push(farmRun);

        farmingTasks = [];

        let obj = `<tr><td>${farmRunName}</td> </tr>`;

        $('#farm-task-table > tbody').empty();

        $('#farm-run-table > tbody').append(obj);

        app.addFarmingRun(JSON.stringify(farmRun));
    }

    function removeFarmingRun() {
        let name = activeRun.text();

        app.removeFarmingRun(name);
    }

    function isTaskAtLocation(location) {
        for (let key of Object.keys(farmingRuns)) {
            if (farmingRuns[key].location === location) {
                return true;
            }
        }

        for (let i = 0; i < farmingTasks.length; i++) {
            if (farmingTasks[i].location === location) {
                return true;
            }
        }

        return false;
    }

    function stopScript() {
        app.stopScript();
    }

    function startScript() {
        app.setFarmingRuns(JSON.stringify(farmingRuns));

        app.startScript();
    }
});

window.setPlants = function (plants) {
    $('#plant').append(`<option>test123</option>`);

    plants.forEach((plant) => {
        $('#plant').append(`<option>${plant}</option>`);
    });
}

function setLocations(locations) {

}
